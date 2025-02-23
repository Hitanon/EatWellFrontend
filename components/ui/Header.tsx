import { FC } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import clsx from "clsx";
import icons from "@/constants/icons"; // Подключаем иконки

interface HeaderProps {
  title: string;
  onBackPress: () => void;
  containerStyle?: string;
}

const Header: FC<HeaderProps> = ({
  title,
  onBackPress,
  containerStyle,
}) => {
  return (
    <View className={clsx("flex-row items-center py-4", containerStyle)}>
      {/* Кнопка назад */}
      <TouchableOpacity onPress={onBackPress} className="">
        <Image source={icons.arrowLeft} className="w-6 h-6" resizeMode="contain" />
      </TouchableOpacity>

      {/* Заголовок */}
      <Text className="flex-1 text-center text-label text-[20px] font-mmedium">{title}</Text>
    </View>
  );
};

export default Header;
