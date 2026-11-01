import { createHashRouter } from "react-router-dom";
import App from "../App.jsx";
import Dep from "../pages/DepFilter.jsx";
import Game from "../pages/Game.jsx";
import DepPage from "../pages/DepPage.jsx";

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "/Dep",
    element: <Dep />,
  },
  {
    path: "/Departement/:number",
    element: <DepPage />,
  },
  {
    path: "/Game",
    element: <Game />,
  },
]);
export default router;