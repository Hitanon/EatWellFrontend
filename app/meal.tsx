import { useState, useEffect } from "react";
import { Text, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


const MealScreen = () => {
    const { id } = useLocalSearchParams(); // Получаем id из параметров

    return (
        <SafeAreaView>
            <ScrollView className="flex-1 px-7 py-3">
                <Text className="flex-1 text-15">{id}</Text>
            </ScrollView>
        </SafeAreaView>

    );
};

export default MealScreen;
