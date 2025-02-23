import { observer } from "mobx-react-lite";
import { View } from "react-native";
import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfileStatsCard from "@/components/cards/ProfileStatsCard";
import LifestyleCard from "@/components/cards/LifeStyleCard";
import CalorieRequirementCard from "@/components/cards/CalorieRequirementCard";
import MainButton from "@/components/ui/MainButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { useAuth } from "@/context/AuthContext";

import { calculateAge } from "@/utils/dateUtils";

const ProfileScreen = observer(() => {
  const { userStore } = useAuth();

  // const [userData, setUserData] = useState({
  //   name: "Имя пользователя",
  //   number: "+7 972-344-56-71",
  //   birthDate: "2003-06-15",
  //   gender: "мужской",
  //   height: 180.0,
  //   currentWeight: 60.0,
  //   targetWeight: 80.0,
  //   lifestyle: "Малоподвижный",
  //   calorieTarget: 3000.0,
  // });

  return (
    <View className="flex-1 items-center justify-start px-7 py-3">
      <ProfileInfo
        name={userStore.name ?? ""}
        phone={userStore.phone ?? ""}
        age={calculateAge(userStore.birthDate ?? "")}
        gender={userStore.gender ?? ""}
      />
      {/* Карточка с параметрами */}
      <ProfileStatsCard
        height={userStore.height ?? 0}
        currentWeight={userStore.currentWeight ?? 0}
        targetWeight={userStore.targetWeight ?? 0}
        containerStyle="mt-6"
      />
      {/* Карточка с образом жизни */}
      <LifestyleCard lifestyle={userStore.lifestyle ?? ""} containerStyle="mt-6" />

      {/* Карточка с суточной нормой калорий */}
      <CalorieRequirementCard calorieTarget={userStore.calorieTarget ?? 0} containerStyle="mt-6" />

      {/* Кнопки */}
      <MainButton text="Изменить профиль" containerStyle="mt-6" onPress={() => { }} />
      <SecondaryButton text="Выход" containerStyle="border-red mt-3" onPress={() => { }} />
    </View>
  );
});

export default ProfileScreen;
