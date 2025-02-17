import { FC } from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";

interface BalanceItemProps {
  icon: ImageSourcePropType;
  text: string;
}

const BalanceItem: FC<BalanceItemProps> = ({ icon, text }) => {
  return (
    <View className="flex-row items-center">
      <Image source={icon} className="w-[22px] h-[22px]" resizeMode="contain" />
      <Text className="text-label text-[14px] font-mbold ml-[5px]">{text}</Text>
    </View>
  );
};

export default BalanceItem;
