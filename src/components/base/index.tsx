import { FC, JSX } from "react";
import { Text, View } from "react-native";

interface IBaseProps {
    component: JSX.Element;
}

const Base:FC<IBaseProps> = ({ component }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {component}
    </View>
  );
}

export default Base;