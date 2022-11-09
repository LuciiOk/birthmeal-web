import React, { useContext, useState } from "react";
import "./Login.scss";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
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
            {...register("email", {
              required: "El email es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "El email no es válido",
              },
            })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "La contraseña es requerida",
            })}
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
