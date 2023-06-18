import { useDispatch, useSelector } from "react-redux";

import agileWebApi from '../api/config';
import { onAddNewCommmentTodo, onDeleteCommentTodo } from "../store";
import {
  onAddNewComments,
  onDeleteComment,
  onLoadComments,
  onLogoutComments,
} from "../store/comment/commentSlice";

export const useCommentStore = () => {
  const { comments } = useSelector((state) => state.comment);
  const { user } = useSelector((state) => state.auth);
  const { todoActive } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const startLoadComments = (comments) => {
    dispatch(onLoadComments(comments));
  };
  const startSaveComment = async ({ comment, todoId }) => {
    try {
      const { data } = await agileWebApi.post("comments", {
        creatorId: user.uid,
        comment,
        todoId,
      });
      data.comment.creator = {
        _id: user.uid,
        name: user.name,
      };

      data.comment._id = data.comment.id;

      delete data.comment.id;
      dispatch(onAddNewComments(data));
      dispatch(onAddNewCommmentTodo({ todoId: todoId, comment: data.comment }));
    } catch (error) {
      console.log(error);
    }
  };

  const startDeleteComment = async ({ id }) => {
    try {
      await agileWebApi.delete(`comments/${id}`);
      dispatch(onDeleteComment(id));
      dispatch(onDeleteCommentTodo({ todoId: todoActive.id, commentId: id }));
    } catch (error) {
      console.log(error);
    }
  };

  const startLogoutComment = () => {
    dispatch(onLogoutComments());
  };

  return {
    //* Properties
    comments,
    user,

    //* Methods
    startSaveComment,
    startDeleteComment,
    startLoadComments,
    startLogoutComment,
  };
};
