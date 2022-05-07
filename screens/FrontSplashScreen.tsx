import { Image, StyleSheet } from "react-native";
import { View } from "../components/Themed";

export default function FrontSplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/chat.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});
