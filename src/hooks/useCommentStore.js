import { useDispatch, useSelector } from "react-redux";
import agileWebApi from "../api/agileWebApi";
import {
  onAddNewComments,
  onDeleteComment,
  onLoadComments,
  onLogoutComments,
} from "../store/comment/commentSlice";

export const useCommentStore = () => {
  const { comments, errorMessage } = useSelector((state) => state.comment);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLoadComments = (comments) => {
    dispatch(onLoadComments(comments));
  };
  const startSaveComment = async ({ comment, tableId }) => {
    try {
      const { data } = await agileWebApi.post("comments", {
        creatorId: user.uid,
        comment,
        tableId,
      });
      data.comment.creator = {
        _id: user.uid,
        name: user.name,
      };
      dispatch(onAddNewComments(data));
    } catch (error) {
      console.log(error);
    }
  };

  const startDeleteComment = async ({ id }) => {
    try {
      await agileWebApi.delete(`comments/${id}`);
      dispatch(onDeleteComment(id));
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