import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import clsx from "clsx";

interface CaptureButtonProps {
  onPress: () => void;
  containerStyle?: string;
}

const CaptureButton: FC<CaptureButtonProps> = ({ onPress, containerStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={clsx("w-24 h-24 border-4 border-primary rounded-full bg-white", containerStyle)}
    />
  );
};

export default CaptureButton;
