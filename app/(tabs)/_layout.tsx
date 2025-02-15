import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ title: "Главная" }} />
      <Tabs.Screen name="products" options={{ title: "Продукты" }} />
      <Tabs.Screen name="statistics" options={{ title: "Статистика" }} />
      <Tabs.Screen name="profile" options={{ title: "Профиль" }} />
    </Tabs>
  );
};

export default TabLayout;
