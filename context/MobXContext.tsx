import React, { createContext, useContext, ReactNode } from "react";
import { Provider } from "mobx-react";
import BalanceStore from "@/stores/BalanceStore";
import NutritionStore from "@/stores/NutritionStore";
import WaterStore from "@/stores/WaterStore";
import DailyRationStore from "@/stores/DailyRationStore";
import ProductsStore from "@/stores/ProductsStore";
import MealsStore from "@/stores/MealsStore";
import ProductDetailStore from "@/stores/ProductDetailStore";
import MealDetailStore from "@/stores/MealDetailStore";
import StatsStore from "@/stores/StatsStore";
import WebSocketStore from "@/stores/WebSocketStore";

// Собираем все сторы в один объект
const stores = {
  balanceStore: BalanceStore,
  nutritionStore: NutritionStore,
  dailyRationStore: DailyRationStore,
  productsStore: ProductsStore,
  mealsStore: MealsStore,
  productDetailStore: ProductDetailStore,
  mealDetailStore: MealDetailStore,
  statsStore: StatsStore,
  webSocketStore: WebSocketStore,
  waterStore: WaterStore,
};

// Создаём контекст
const MobXContext = createContext(stores);

// Создаём провайдер
export const MobXProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider {...stores}>{children}</Provider>;
};

// Хук для использования контекста
export const useStores = () => useContext(MobXContext);
