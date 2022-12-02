import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "#EFEFEF",
  },
  viewBtnSearchBarContainer: {
    zIndex: 1,
    width: "100%",
    height: 90,
    justifyContent: "space-between",
  },
  filterByTextBtnsContainer: {
    flexDirection: "row",
    marginBottom: 60,
    zIndex: 1,
  },
  filterParagraphContainer: {
    height: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: "rgba(131, 131, 131, 0.3)",
    marginTop: 5,
  },
  filterParagraph: {
    fontSize: 13,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 7,
    color: "#383838",
  },
  map: {
    height: "100%",
    width: "100%",
    marginTop: -165,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
});

export default styles;
