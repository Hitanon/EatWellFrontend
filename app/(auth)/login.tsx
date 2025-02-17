import { useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import MainButton from "@/components/ui/MainButton";
import MainInput from "@/components/ui/MainInput";
import { InputType } from "@/constants/types";
import icons from "@/constants/icons";

const LoginScreen = () => {
  const router = useRouter();

  const [phone, setPhone] = useState("");

  return (
    <SafeAreaView className="flex-1 items-start justify-center p-7">
      <View className="w-full flex-1 items-start justify-center mt-[-40px]">
        <Image source={icons.smallLogo} className="w-48 mb-12" resizeMode="contain" />

        <Text className="text-3xl font-mbold mb-12">Вход</Text>

        <MainInput
          label="Телефон"
          placeholder="+7 ___-___-__-__"
          inputType={InputType.PHONE}
          containerStyle="mb-8"
          value={phone}
          onChangeText={setPhone}
        />

        <MainButton text="Вход" onPress={() => router.replace("/(tabs)/home")} />

        <View className="w-full flex-row justify-center items-center mt-6">
          <Text className="text-label text-lg font-mregular">Нет аккаунта?</Text>
          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text className="text-primary text-lg font-mbold ml-1">Регистрация</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
