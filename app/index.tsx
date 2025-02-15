import { Redirect } from "expo-router";
import { useAuth } from "../context/AuthContext";
import LoadingScreen from "../components/LoadingScreen";

const Index = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) {
    return <LoadingScreen />;
  }

  return isAuthenticated ? <Redirect href="/(tabs)/home" /> : <Redirect href="/(auth)/login" />;
};

export default Index;
