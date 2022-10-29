import React, { useContext, useState } from "react";
import "./Login.scss";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setEmailError("");
      setPasswordError("");
      if (email === "") {
        setEmailError("El email es requerido");
      }
      if (password === "") {
        setPasswordError("La contraseña es requerida");
      }
      if (email !== "" && password !== "") {
        await login(email, password);
        navigate("/admin");
        toast.success("Has iniciado sesión correctamente");
      }
    } catch(e) {
      console.log(e);
      toast.error("Error al iniciar sesión");
    }
  };

  return (
    <div className="login main__container">
      <div className="form__container">
        <h1>Login Admin</h1>
        <form className="login__form">
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="error">{emailError}</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="error">{passwordError}</span>
          <button type="submit" onClick={handleLogin}>
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
