import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/ui/Header";
import MealForm from "@/components/forms/MealForm";

const MealScreen = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams(); // Получаем id из параметров

    return (
        <SafeAreaView className="flex-1 px-7 py-3">
            <Header title="Блюдо" onBackPress={() => router.back()} />
            <MealForm mealId={id} />
        </SafeAreaView>
    );
};

export default MealScreen;
