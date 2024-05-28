import { FC, JSX } from "react";
import { Text, View } from "react-native";

interface IBaseProps {
    component: JSX.Element;
}

const Base:FC<IBaseProps> = ({ component }) => {
  return (
    <View style={{ flex: 1 }}>
      {component}
    </View>
  );
}

export default Base;