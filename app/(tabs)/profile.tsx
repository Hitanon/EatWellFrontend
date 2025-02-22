import { useState } from "react";
import { View } from "react-native";
import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfileStatsCard from "@/components/cards/ProfileStatsCard";
import LifestyleCard from "@/components/cards/LifeStyleCard";
import CalorieRequirementCard from "@/components/cards/CalorieRequirementCard";
import MainButton from "@/components/ui/MainButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

import { calculateAge } from "@/utils/dateUtils";

const ProfileScreen = () => {
  const [userData, setUserData] = useState({
    name: "Имя пользователя",
    number: "+7 972-344-56-71",
    birthDate: "2003-06-15",
    gender: "мужской",
    height: 180.0,
    currentWeight: 60.0,
    targetWeight: 80.0,
    lifestyle: "Малоподвижный",
    calorieTarget: 3000.0,
  });

  return (
    <View className="flex-1 items-center justify-start px-7 py-3">
      <ProfileInfo
        name={userData.name}
        phone={userData.number}
        age={calculateAge(userData.birthDate)}
        gender={userData.gender}
      />
      {/* Карточка с параметрами */}
      <ProfileStatsCard
        height={userData.height}
        currentWeight={userData.currentWeight}
        targetWeight={userData.targetWeight}
        containerStyle="mt-6"
      />
      {/* Карточка с образом жизни */}
      <LifestyleCard lifestyle={userData.lifestyle} containerStyle="mt-6" />

      {/* Карточка с суточной нормой калорий */}
      <CalorieRequirementCard calorieTarget={userData.calorieTarget} containerStyle="mt-6" />

      {/* Кнопки */}
      <MainButton text="Изменить профиль" containerStyle="mt-6" onPress={() => {}} />
      <SecondaryButton text="Выход" containerStyle="border-red mt-3" onPress={() => {}} />
    </View>
  );
};

export default ProfileScreen;
