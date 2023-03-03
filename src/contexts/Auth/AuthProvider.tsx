import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useApi } from "../../hook/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, SetUser] = useState<User | null>(null);
  const api = useApi();

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if (data.user && data.token) {
      SetUser(data.user);
      return true;
    }
    return false;
  };

  const singout = async () => {
    await api.logout();
    SetUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signin, singout }}>
      {children}
    </AuthContext.Provider>
  );
};
