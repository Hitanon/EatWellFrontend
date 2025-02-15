import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AuthProvider, useAuth } from "../context/AuthContext";
import "../global.css";
import LoadingScreen from "../components/LoadingScreen";

const RootLayout = () => {
  return (
    <AuthProvider>
      <MainNavigation />
    </AuthProvider>
  );
};

const MainNavigation = () => {
  const { isAuthenticated } = useAuth();
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    MullerBold: require("../assets/fonts/MullerBold.ttf"),
    MullerExtraBold: require("../assets/fonts/MullerExtraBold.ttf"),
    MullerMedium: require("../assets/fonts/MullerMedium.ttf"),
    MullerRegular: require("../assets/fonts/MullerRegular.ttf"),
  });

  if (!fontsLoaded || isAuthenticated === null) {
    return <LoadingScreen />;
  }

  return (
    <GestureHandlerRootView className="flex-1 bg-gray-light">
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
