import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 15,
  },
  modal: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(56,56,56,0.6)",
  },
  modalContainer: {
    height: 160,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
  btnContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  searchBarContainer: {
    marginBottom: 5,
  },
});

export default styles;
