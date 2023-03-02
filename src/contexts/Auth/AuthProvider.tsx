import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, SetUser] = useState<User | null>(null);

  const signin = (email: string, password: string) => {};

  const singout = () => {};

  return (
    <AuthContext.Provider value={{ user, signin, singout }}>
      {children}
    </AuthContext.Provider>
  );
};
