import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoadingScreen = () => {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white">
            <ActivityIndicator size="large" color="#509505" />
        </SafeAreaView>
    );
};

export default LoadingScreen;
