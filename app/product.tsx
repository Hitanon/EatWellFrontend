import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/ui/Header";
import ProductForm from "@/components/forms/ProductForm";

const ProductScreen = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams(); // Получаем id из параметров

    return (
        <SafeAreaView className="flex-1 px-7 py-3">
            <Header title="Продукт" onBackPress={() => router.back()} />
            <ProductForm productId={id} />
        </SafeAreaView>
    );
};

export default ProductScreen;
