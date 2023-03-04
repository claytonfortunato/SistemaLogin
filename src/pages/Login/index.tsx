import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

import * as C from "./styles";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClick = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/");
      } else {
        alert("Não deu certo");
      }
    }
  };

  return (
    <C.Container>
      <h2>Página Fechada</h2>

      <input
        type="text"
        value={email}
        onChange={handleEmailInput}
        placeholder="Digite seu e-mail"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordInput}
        placeholder="Digite sua senha"
      />

      <button onClick={handleClick}>Logar</button>
    </C.Container>
  );
};

export default Login;
