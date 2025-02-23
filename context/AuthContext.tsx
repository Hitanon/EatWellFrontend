import React, { createContext, useContext, useEffect, ReactNode, useState } from "react";
import { observer } from "mobx-react-lite";
import UserStore from "@/stores/UserStore";

interface AuthContextType {
  userStore: typeof UserStore;
}

const AuthContext = createContext<AuthContextType>({ userStore: UserStore });

export const AuthProvider: React.FC<{ children: ReactNode }> = observer(({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Эмуляция загрузки
      UserStore.isAuthenticated = false; // Эмулируем, что пользователь не авторизован
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return null;
  }

  return <AuthContext.Provider value={{ userStore: UserStore }}>{children}</AuthContext.Provider>;
});

export const useAuth = () => useContext(AuthContext);
