import { useState, useEffect } from "react";
import { Text, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import images from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";

interface ProductData {
    id: string | string[];
    image?: any;
    name: string;
    weight: number;
    calories: number;
    proteins: number;
    fats: number;
    carbs: number;
}

const ProductScreen = () => {
    const { id } = useLocalSearchParams(); // Получаем id из параметров

    const defaultProduct: ProductData = {
        id: id,
        image: images.foodPlaceholder,
        name: "Яблоко Голден",
        weight: 150,
        calories: 78,
        proteins: 0.3,
        fats: 0.2,
        carbs: 20,
    };

    const [product, setProduct] = useState<ProductData>(
        id ? defaultProduct : { id: "", name: "", weight: 0, calories: 0, proteins: 0, fats: 0, carbs: 0 }
    );

    return (
        <SafeAreaView>
            <ScrollView className="flex-1 px-7 py-3">
                <Text className="flex-1 text-15">{id}</Text>
            </ScrollView>
        </SafeAreaView>

    );
};

export default ProductScreen;
