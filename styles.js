import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A4959",
    alignItems: "center",
  },
  mainContainer: {
    marginTop: Constants.statusBarHeight + 20,
  },
  headingText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  generated: {
    marginTop: 30,
    height: 100,
    width: 360,
    backgroundColor: "#52596B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttons: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  button: {
    backgroundColor: "#FF9201",
    padding: 8,
    borderRadius: 7,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    marginVertical: 10,
    height: 70,
    width: 360,
    backgroundColor: "#52596B",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  inputBoxText: {
    color: "#fff",
  },
  input: {
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#FF9201",
    color: "#fff",
    textAlign: "center",
  },
});

export default styles;
