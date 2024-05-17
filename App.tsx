import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation";

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;