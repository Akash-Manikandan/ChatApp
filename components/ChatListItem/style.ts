import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  lefContainer: {
    flexDirection: "row",
  },
  midContainer: {
    justifyContent: "space-around",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
  },
  lastMessage: {
    fontSize: 12,
    color: "grey",
    fontFamily: "Poppins-Regular",
  },
  time: {
    fontSize: 10,
    color: "grey",
    fontFamily: "Poppins-Regular",
  },
});

export default styles;
