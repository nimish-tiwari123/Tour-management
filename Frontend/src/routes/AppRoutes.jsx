import { Routes, Route, Navigate } from "react-router-dom";
import { AppRouteConstants } from "./AppRouteConstants";
import { Login, SignUp } from "../pages";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path={AppRouteConstants.login} element={<Login />} />
      <Route path={AppRouteConstants.signUp} element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
