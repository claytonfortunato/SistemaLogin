import { useState } from "react";
import * as C from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {};

  return (
    <C.Container>
      <h2>Página Fechada</h2>

      <input type="text" value={email} placeholder="Digite seu e-mail" />
      <input type="password" value={password} placeholder="Digite sua senha" />

      <button onClick={handleClick}>Logar</button>
    </C.Container>
  );
};

export default Login;
