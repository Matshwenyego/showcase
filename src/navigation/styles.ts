import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      height: 70,
    },
    tabBar: {
      height: 70,
      position: "absolute",
      margin: 16,
      borderRadius: 16,
    },
    btn: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 4,
      borderColor: "#FFFFFF",
      backgroundColor: "#FFFFFF",
      justifyContent: "center",
      alignItems: "center",
    },
    circle: {
      ...StyleSheet.absoluteFillObject,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#637AFF",
      borderRadius: 25,
    },
    text: {
      fontSize: 12,
      textAlign: "center",
      color: "#637AFF",
      fontWeight: "500",
    },
  });
  
  export default styles;