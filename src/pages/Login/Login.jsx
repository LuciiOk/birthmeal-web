import React, { useContext } from "react";
import "./Login.scss";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../utils/ValidationsSchemas";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(LoginSchema) });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate("/admin");
      toast.success("Has iniciado sesión correctamente");
    } catch (e) {
      console.log(e);
      toast.error("Error al iniciar sesión");
    }
  };

  return (
    <div className="login main__container">
      <div className="form__container">
        <h1>Login Admin</h1>
        <form className="login__form" onSubmit={handleSubmit(handleLogin)}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
