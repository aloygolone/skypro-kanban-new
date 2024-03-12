import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./pages/Home/HomePage";
import SignIn from "./pages/SignIn/SignInPage";
import SignUp from "./pages/SignUp/SignUpPage";
import NotFound from "./pages/NotFound/NotFoundPage";
import TaskPage from "./pages/Task/TaskPage";
import ExitPage from "./pages/Exit/ExitPage";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={appRoutes.HOME} element={<HomePage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SignIn />} />
      <Route path={appRoutes.SIGNUP} element={<SignUp />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
