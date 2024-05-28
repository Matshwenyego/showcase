import { FC } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Base from "../../components/base";

const data = [
  {
    id: 0,
    name: "Discount Buddy",
    link: "",
    description:
      "This app uses your current location to find stores within a calculated radius from you, the store listing will show how many items are on special per store, the distance from your current location in km. When a store is selected, you will see all the discounts in a card with old price and Current discounted price",
  },
  {
    id: 1,
    name: "Workforce",
    link: "",
    description:
      "WeBill Field Manager brings modern technology to traditional ways of managing utility assets. WeBill Field Manager harnesses the power of mobility, big data, machine learning, artificial intelligence & cloud computing to revolutionise the way assets are managed and utilities like water, electricity and gas are measured in the field",
  },
  {
    id: 2,
    name: "My DStv",
    link: "",
    description:
      "Manage Your DStv. Pay & Upgrade. Earn Rewards. View the TV Guide. Get Cover. The MyDStv app further enhances your entertainment with an immersive viewing experience and value-added features that give you control of how and what you watch",
  },
  {
    id: 3,
    name: "SPAR2U",
    link: "",
    description:
      "This app allows you to browse through a wide range of products from your local SPAR or TOPS at SPAR in real time. Simply make your selection and let it come to you.",
  },
];

const AboutScreen: FC = () => {
  return (
    <Base
      component={
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 0.25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 20,
                }}
              >
                <Image
                  style={{ borderRadius: 20, height: 150, width: 150 }}
                  resizeMode="contain"
                  source={require("../../assets/Avatar.png")}
                />
              </View>
            </View>
            <View
              style={{
                flex: 0.1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "Avenir", textAlign: "center" }}>
                Matshwenyego Ashley Ngoetjana
              </Text>
              <Text style={{ fontFamily: "Avenir", textAlign: "center" }}>
                React Native Developer
              </Text>
            </View>
            <View
              style={{
                flex: 0.15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "Avenir", textAlign: "center" }}>
                I'm a dedicated father and husband, and a React Native developer
                by profession. When I'm not coding, you'll find me cycling
                around town, enjoying the freedom and tranquility it brings. As
                an introvert, I cherish quiet moments and find joy in the simple
                pleasures of life.
              </Text>
            </View>
            <View
              style={{
                flex: 0.15,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                }}
              >
                <Image
                  style={{ borderRadius: 25, height: 50, width: 50 }}
                  resizeMode="contain"
                  source={require("../../assets/Linkedin.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                }}
              >
                <Image
                  style={{
                    borderRadius: 25,
                    height: 50,
                    width: 50,
                    borderWidth: 0.5,
                  }}
                  resizeMode="contain"
                  source={require("../../assets/Github.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                }}
                disabled
              >
                <Image
                  style={{
                    borderRadius: 25,
                    height: 50,
                    width: 50,
                    borderWidth: 0.5,
                    backgroundColor: "#000000",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/404.png")}
                />
              </TouchableOpacity>
            </View>
            {/* <View
              style={{
                flex: 0.05,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "Avenir", textAlign: "center" }}>
                Projects I worked on/contributed to:
              </Text>
            </View> */}
            <View
              style={{
                flex: 0.5,
                // borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ padding: '2%', fontFamily: "Avenir", textAlign: "center" }}>
                Projects I worked on/contributed to:
              </Text>
              <FlatList
                contentContainerStyle={{ paddingVertical: "2%" }}
                data={data}
                renderItem={({ item }) => (
                  <View style={{ marginBottom: "10%" }}>
                    <Text style={{ fontFamily: "Avenir", textAlign: "center" }}>
                      Name: {item?.name}
                    </Text>
                    <Text style={{ fontFamily: "Avenir", textAlign: "center" }}>
                      Description: {item?.description}
                    </Text>
                    <Text style={{ fontFamily: "Avenir", textAlign: "center" }}>
                      Link: {item?.description}
                    </Text>
                  </View>
                )}
                keyExtractor={(item: {
                  id: number;
                  name: string;
                  link: string;
                  description: string;
                }) => item.id.toString()}
              />
            </View>
          </View>
        </ScrollView>
      }
    />
  );
};

export default AboutScreen;
