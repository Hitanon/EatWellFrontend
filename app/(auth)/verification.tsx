import { useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import MainButton from "@/components/MainButton";
import MainInput from "@/components/MainInput";
import { InputType } from "@/constants/types";
import icons from "@/constants/icons"; 

const VerificationScreen = () => {
  const router = useRouter();

  const [code, setCode] = useState("");

  return (
    <SafeAreaView className="flex-1 items-start justify-center p-7">
      <View className="w-full flex-1 items-start justify-center mt-[-40px]">
        <Image source={icons.smallLogo} className="w-48 mb-12" resizeMode="contain" />

        <Text className="text-3xl font-mbold mb-12">Подтверждение</Text>

        <MainInput
          label="Введите код, отправленный в SMS"
          placeholder="Код..."
          inputType={InputType.NUMERIC}
          containerStyle="mb-8"
          value={code}
          onChangeText={setCode}
        />

        <MainButton text="Подтвердить" onPress={() => router.push("/register-details")} />
      </View>
    </SafeAreaView>
  );
};

export default VerificationScreen;
