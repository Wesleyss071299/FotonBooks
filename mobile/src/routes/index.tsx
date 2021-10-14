import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector } from "./../store/hooks";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes: React.FC = () => {
  const signed = useAppSelector((state) => state.auth.isLoggedIn);
  return (
    <NavigationContainer>
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
