import Home from "./pages/Home";
import Private from "./pages/Private";
import { Route, Routes, Link } from "react-router-dom";

import { RequireAuth } from "./contexts/Auth/RequireAuth";

import * as C from "./styles";

function App() {
  return (
    <C.Container>
      <C.header>
        <h1>Sistema de Login</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página Privada</Link>
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
