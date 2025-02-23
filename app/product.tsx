import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStores } from "@/context/MobXContext";
import Header from "@/components/ui/Header";
import PhotoPicker from "@/components/food/PhotoPicker";
import MainInput from "@/components/ui/MainInput";
import MainButton from "@/components/ui/MainButton";

import { InputType } from "@/constants/types";
import icons from "@/constants/icons";

const ProductScreen = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams(); // Получаем id из параметров
    const { productDetailStore } = useStores();

    // Инициализируем локальный стейт продуктом из стора
    const [product, setProduct] = useState({
        id: productDetailStore.product.id || "",
        name: productDetailStore.product.name || "",
        weight: productDetailStore.product.weight || 0,
        calories: productDetailStore.product.calories || 0,
        protein: productDetailStore.product.protein || 0,
        fat: productDetailStore.product.fat || 0,
        carbs: productDetailStore.product.carbs || 0,
        image: productDetailStore.product.image || "",
    });

    // Функция для обновления полей продукта
    const updateProductField = (field: keyof typeof product, value: any) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            [field]: value,
        }));
    };

    // Обновляем стор при изменении локального стейта
    useEffect(() => {
        productDetailStore.setProduct(product);
    }, [product]);

    return (
        <SafeAreaView className="flex-1 px-7 py-3">
            <Header title="Продукт" onBackPress={() => router.back()} />
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <PhotoPicker
                    image={product.image}
                    onImageSelect={(image) => updateProductField("image", image)}
                    containerStyle="mt-2 mb-6"
                />
                <MainInput
                    label="Название"
                    placeholder="Введите название..."
                    inputType={InputType.TEXT}
                    containerStyle="mb-4"
                    value={product.name}
                    onChangeText={(text) => updateProductField("name", text)}
                />
                <MainInput
                    label="Вес (г)"
                    placeholder="Введите вес"
                    inputType={InputType.DECIMAL}
                    containerStyle="mb-8"
                    value={product.weight.toString()}
                    onChangeText={(text) => updateProductField("weight", Number(text))}
                />

                <Text className="text-label text-lg font-mbold mb-4">В 100г продукта содержится:</Text>

                <MainInput
                    label={
                        <View className="flex-row items-center">
                            <Image source={icons.calorieOrange} className="w-[15px] h-[20px] mr-2" resizeMode="contain" />
                            <Text className="text-label text-lg font-mmedium">Калории (ккал)</Text>
                        </View>
                    }
                    placeholder="Введите калории"
                    inputType={InputType.NUMERIC}
                    containerStyle="mb-4"
                    value={product.calories.toString()}
                    onChangeText={(text) => updateProductField("calories", Number(text))}
                />
                <MainInput
                    label="Белки (г)"
                    placeholder="Введите белки"
                    inputType={InputType.NUMERIC}
                    containerStyle="mb-4"
                    labelStyle="text-primary"
                    value={product.protein.toString()}
                    onChangeText={(text) => updateProductField("protein", Number(text))}
                />
                <MainInput
                    label="Жиры (г)"
                    placeholder="Введите жиры"
                    inputType={InputType.NUMERIC}
                    containerStyle="mb-4"
                    labelStyle="text-orange"
                    value={product.fat.toString()}
                    onChangeText={(text) => updateProductField("fat", Number(text))}
                />
                <MainInput
                    label="Углеводы (г)"
                    placeholder="Введите углеводы"
                    inputType={InputType.NUMERIC}
                    containerStyle="mb-4"
                    labelStyle="text-blue"
                    value={product.carbs.toString()}
                    onChangeText={(text) => updateProductField("carbs", Number(text))}
                />
            </ScrollView>
            <MainButton
                text={id ? "Сохранить изменения" : "Создать продукт"}
                onPress={() => router.back()}
                containerStyle="mt-4"
            />
        </SafeAreaView>
    );
};

export default ProductScreen;
