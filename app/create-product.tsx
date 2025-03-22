import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Alert, View } from "react-native";
import Camera from "@/components/camera";
import Header from "@/components/ui/Header";
import TabSelector from "@/components/ui/TabSelector";
import { TabProductType, CreateProductTabType } from "@/constants/types";
import TabSwitcher from "@/components/ui/TabSwitcher";
import MealForm from "@/components/forms/MealForm";
import ProductForm from "@/components/forms/ProductForm";
import MainButton from "@/components/ui/MainButton";

const CreateProductScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<CreateProductTabType>(CreateProductTabType.PHOTO);
  const [activeProductTab, setActivProductTab] = useState<TabProductType>(TabProductType.Meal);

  // Функция для показа попапа при сканировании штрихкода
  const handleBarcodeScanned = (barcode: string) => {
    Alert.alert("Штрихкод", `Код: ${barcode}`);
  };

  // Функция для показа попапа при съемке фото
  const handlePhotoTaken = (uri: string) => {
    Alert.alert("Фото сделано", `URI: ${uri}`);
  };

  return (
    <SafeAreaView className="flex-1 py-3 bg-gray-light">
      <Header
        title="Создание продукта"
        onBackPress={() => router.back()}
        containerStyle="px-7"
      />

      {/* Камера отображается, если не выбран ручной режим */}
      {activeTab !== CreateProductTabType.MANUAL && (
        <Camera
          isScanner={activeTab === CreateProductTabType.SCANNER}
          onBarcodeScanned={handleBarcodeScanned}
          onPhotoTaken={handlePhotoTaken}
          containerStyle="mt-4"
        />
      )}

      {activeTab === CreateProductTabType.MANUAL && (
        <View className="flex-1 px-7 py-4 mb-20">
          <View className="items-center">
            <TabSwitcher
              tabs={[TabProductType.Meal, TabProductType.Product]}
              onSelect={(tab) => setActivProductTab(tab as TabProductType)}
            />
          </View>

          {activeProductTab === TabProductType.Meal && <MealForm />}
          {activeProductTab === TabProductType.Product && <ProductForm />}

        </View>
      )}

      {/* Переключатель вкладок */}
      <TabSelector
        tabs={Object.values(CreateProductTabType)}
        activeTab={activeTab}
        onSelect={(tab) => setActiveTab(tab as CreateProductTabType)}
        containerStyle="mt-4 px-7"
      />
    </SafeAreaView>
  );
};

export default CreateProductScreen;
