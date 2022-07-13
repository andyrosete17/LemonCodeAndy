import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "core";
import {LoginComponent} from './login.component';

export const LoginContainer: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = (username: string, password: string) => {
    if (username === "admin" && password === "test") {
      navigate(routes.list);
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return <LoginComponent onLogin={handleLogin} />;
};
