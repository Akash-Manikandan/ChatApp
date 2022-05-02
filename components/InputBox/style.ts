import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "flex-end",
  },
  mainContainer: {
    flexDirection: "row",
    borderRadius: 25,
    marginRight: 10,
    flex: 1,
    padding: 10,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
    textAlignVertical: "center",
    alignSelf: "center",
    fontSize: 15,
    fontFamily: "Poppins-Regular",
  },
  icon: {
    marginHorizontal: 5,
    paddingLeft: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonContainer: {
    borderRadius: 25,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
