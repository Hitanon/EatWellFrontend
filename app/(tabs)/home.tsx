import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">🏠 Главная</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
