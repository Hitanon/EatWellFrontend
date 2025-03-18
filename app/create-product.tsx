import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Camera from "@/components/camera";
import Header from "@/components/ui/Header";
import TabSelector from "@/components/ui/TabSelector";
import { TabProductType, CreateProductTab } from "@/constants/types";
import TabSwitcher from "@/components/ui/TabSwitcher";
import { View } from "react-native";
import MealForm from "@/components/forms/MealForm";
import ProductForm from "@/components/forms/ProductForm";


const CreateProductScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<CreateProductTab>(CreateProductTab.PHOTO);
  const [activeProductTab, setActivProductTab] = useState<TabProductType>(TabProductType.Meal);

  return (
    <SafeAreaView className="flex-1 py-3 bg-gray-light">
      <Header
        title="Создание продукта"
        onBackPress={() => router.back()}
        containerStyle="px-7"
      />

      {/* Камера отображается, если не выбран ручной режим */}
      {activeTab !== CreateProductTab.MANUAL && (
        <Camera
          isScanner={activeTab === CreateProductTab.SCANNER}
          onBarcodeScanned={() => { }}
          onPhotoTaken={(uri) => console.log("Фото сделано:", uri)}
          containerStyle="mt-4"
        />
      )}

      {activeTab === CreateProductTab.MANUAL && (
        <View className="flex-1 px-7 py-4">
          <View className="items-center">
            <TabSwitcher
              tabs={[TabProductType.Meal, TabProductType.Product]}
              onSelect={(tab) => setActivProductTab(tab as TabProductType)}
            />
          </View>

          {activeProductTab === TabProductType.Meal &&
            <MealForm />
          }
          {activeProductTab === TabProductType.Product &&
            <ProductForm />
          }
        </View>
      )
      }

      {/* Переключатель вкладок */}
      <TabSelector
        tabs={Object.values(CreateProductTab)} // Передаем массив значений из Enum
        activeTab={activeTab}
        onSelect={(tab) => setActiveTab(tab as CreateProductTab)}
        containerStyle="mt-4 px-7"
      />
    </SafeAreaView>
  );
};

export default CreateProductScreen;
