import React, { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { useRouter } from "expo-router";
import { useStores } from "@/context/MobXContext";
import PhotoPicker from "@/components/food/PhotoPicker";
import MainInput from "@/components/ui/MainInput";
import MainButton from "@/components/ui/MainButton";
import NutritionInfo from "@/components/food/NutritionInfo";
import MealProductList from "@/components/food/MealProductList";
import { InputType } from "@/constants/types";

interface MealFormProps {
    mealId?: string | string[];
}

const MealForm: React.FC<MealFormProps> = ({ mealId }) => {
    const router = useRouter();
    const { mealDetailStore } = useStores();

    const [meal, setMeal] = useState({
        id: mealDetailStore.meal.id || "",
        name: mealDetailStore.meal.name || "",
        weight: mealDetailStore.meal.weight || 0,
        calories: mealDetailStore.meal.calories || 0,
        protein: mealDetailStore.meal.protein || 0,
        fat: mealDetailStore.meal.fat || 0,
        carbs: mealDetailStore.meal.carbs || 0,
        image: mealDetailStore.meal.image || "",
        ingredients: mealDetailStore.meal.ingredients || [],
    });

    const updateMealField = (field: keyof typeof meal, value: any) => {
        setMeal((prevMeal) => ({
            ...prevMeal,
            [field]: value,
        }));
    };

    useEffect(() => {
        mealDetailStore.setMeal(meal);
    }, [meal]);

    return (
        <>
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <PhotoPicker
                    image={meal.image}
                    onImageSelect={(image) => updateMealField("image", image)}
                    containerStyle="mt-2 mb-6"
                />
                <MainInput
                    label="Название"
                    placeholder="Введите название..."
                    inputType={InputType.TEXT}
                    containerStyle="mb-8"
                    value={meal.name}
                    onChangeText={(text) => updateMealField("name", text)}
                />

                <Text className="text-label text-[18px] font-mbold mb-4">Итого в блюде содержится:</Text>

                <NutritionInfo
                    weight={meal.weight}
                    calories={meal.calories}
                    protein={meal.protein}
                    fat={meal.fat}
                    carbs={meal.carbs}
                />

                <MealProductList
                    products={meal.ingredients}
                    onRemove={(id) => { }}
                    onAddPress={() => { }}
                    containerStyle="mt-6"
                />
            </ScrollView>
            <MainButton
                text={mealId ? "Сохранить изменения" : "Создать блюдо"}
                onPress={() => router.back()}
                containerStyle="mt-4"
            />
        </>
    );
};

export default MealForm;
