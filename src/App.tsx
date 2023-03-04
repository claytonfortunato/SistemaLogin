import Home from "./pages/Home";
import Private from "./pages/Private";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

import { RequireAuth } from "./contexts/Auth/RequireAuth";

import * as C from "./styles";
import { useContext } from "react";
import { AuthContext } from "./contexts/Auth/AuthContext";

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  };

  return (
    <C.Container>
      <C.header>
        <h1>Sistema de Login</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página Privada</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </C.header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
      </Routes>
    </C.Container>
  );
}

export default App;
