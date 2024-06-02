import { IUser } from '@/@types.kinozov';
import { useContext, createContext, useState, ReactNode } from 'react';

export type AuthContextType = {
  user: IUser | null;
  signIn: (user: IUser | null) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider ({children}: {children: ReactNode}) {
  const [user, setUser] = useState<IUser | null>(null);

  const signIn = async (user: IUser | null) => {
    setUser(user)
  }

  return (
    <AuthContext.Provider value={{user, signIn}}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
