import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import './styles.css'

export const AgileWebPro = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
