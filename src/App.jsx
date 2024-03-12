import { Routes, Route, useNavigate } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./pages/Home/HomePage";
import SignIn from "./pages/SignIn/SignInPage";
import SignUp from "./pages/SignUp/SignUpPage";
import NotFound from "./pages/NotFound/NotFoundPage";
import TaskPage from "./pages/Task/TaskPage";
import ExitPage from "./pages/Exit/ExitPage";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function login(newUser) {
    setUser(newUser);
    navigate(appRoutes.HOME);
  }

  function logout(e) {
    e.preventDefault();
    setUser(null);
    navigate(appRoutes.SIGNIN);
  }

  function signup( newUser ) {
    setUser(newUser);
    navigate(appRoutes.HOME);
  }

  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.HOME} element={<HomePage user={user} />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SignIn login={login} />} />
      <Route path={appRoutes.SIGNUP} element={<SignUp signup={signup} />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
