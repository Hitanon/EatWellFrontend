import { FC } from "react";
import { View } from "react-native";
import BalanceItem from "./ui/BalanceItem";
import icons from "@/constants/icons";

interface BalanceBarProps {
  tickets: number;
  apples: number;
  lives: number;
}

const BalanceBar: FC<BalanceBarProps> = ({ tickets, apples, lives }) => {
  return (
    <View className="w-full flex-row justify-between px-8 py-3">
      <BalanceItem icon={icons.ticket} text={tickets.toString()} />
      <BalanceItem icon={icons.appleGolden} text={apples.toString()} />
      <BalanceItem icon={icons.heart} text={lives.toString()} />
    </View>
  );
};

export default BalanceBar;
