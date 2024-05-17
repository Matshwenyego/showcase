import React, { useEffect, useRef } from "react";
import {
  TouchableOpacity,
  View,
  useColorScheme,
  SafeAreaView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

// screens
import HomeScreen from "../screens/home";
import AboutScreen from "../screens/about";

import styles from "./styles";

type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: "home",
    icon: "home",
    component: HomeScreen,
  },
  {
    route: "About",
    label: "About",
    type: "about",
    icon: "user",
    component: AboutScreen,
  },
];

const animate1 = {
  0: { scale: 0.5, translateY: 7 },
  0.92: { translateY: -34 },
  1: { scale: 1.2, translateY: -24 },
};
const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 },
};

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  0.5: { scale: 0.2 },
  0.8: { scale: 0.7 },
  1: { scale: 1 },
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = (props: any) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const isDarkMode = useColorScheme() === "dark";

  const { colors } = useTheme();
  const color = isDarkMode ? "#FFFFFF" : "#000000";
  const bgColor = colors.background;

  useEffect(() => {
    if (focused) {
      viewRef?.current?.animate(animate1);
      circleRef?.current?.animate(circle1);
      textRef?.current?.transitionTo({ scale: 1 });
    } else {
      viewRef?.current?.animate(animate2);
      circleRef?.current?.animate(circle2);
      textRef?.current?.transitionTo({ scale: 0 });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <View
          style={[
            styles.btn,
            { borderColor: bgColor, backgroundColor: bgColor },
          ]}
        >
          <Animatable.View ref={circleRef} style={styles.circle} />
          <AntDesign
            name={item.icon}
            size={24}
            color={focused ? "#FFFFFF" : "#637AFF"}
          />
        </View>
        {/* tab name */}
        {/* <Animatable.Text ref={textRef} style={[styles.text, { color }]}>
          {item.label}
        </Animatable.Text> */}
      </Animatable.View>
    </TouchableOpacity>
  );
};

const RootNavigation = () => {
  const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator
        screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}
      >
        {TabArr.map((item, index) => (
          <Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        ))}
      </Navigator>
    </SafeAreaView>
  );
};

export default RootNavigation;
