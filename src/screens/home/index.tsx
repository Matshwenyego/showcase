import { FC, Fragment } from "react";
import { Text, FlatList, View } from "react-native";
import Base from "../../components/base";

const HomeScreen: FC = () => {
  return (
    <Base
      component={
        <Fragment>
          <View>
            <Text>Home</Text>
          </View>
        </Fragment>
      }
    />
  );
};

export default HomeScreen;
