import { useState } from "react";
import { observer } from "mobx-react-lite";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import icons from "@/constants/icons"; // Импортируем иконки
import BalanceBar from "@/components/BalanceBar";
import { useStores } from "@/context/MobXContext";

const TabLayout = observer(() => {
  const { balanceStore } = useStores();

  return (
    <SafeAreaView className="flex-1">
      <BalanceBar
        tickets={balanceStore.frozenTickets}
        apples={balanceStore.goldenApples}
        lives={balanceStore.healthyDays}
      />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false, // Убираем подписи
          tabBarStyle: {
            height: 70, // Увеличиваем высоту таб-бара
            backgroundColor: "#F5F5F5",
            paddingTop: 12,
          },
          tabBarItemStyle: {
            justifyContent: "center", // Центрируем иконки по высоте
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <Image source={focused ? icons.homeActive : icons.home} style={{ width: 32, height: 32 }} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="products"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <Image source={focused ? icons.productsActive : icons.products} style={{ width: 32, height: 32 }} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <Image source={focused ? icons.tasksActive : icons.tasks} style={{ width: 32, height: 32 }} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="statistics"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <Image source={focused ? icons.statisticsActive : icons.statistics} style={{ width: 32, height: 32 }} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="records"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <Image source={focused ? icons.recordsActive : icons.records} style={{ width: 32, height: 32 }} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <Image source={focused ? icons.profileActive : icons.profile} style={{ width: 32, height: 32 }} />
              </View>
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
});

export default TabLayout;
