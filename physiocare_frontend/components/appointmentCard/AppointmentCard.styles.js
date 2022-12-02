import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 132,
    marginVertical: 7,
    paddingVertical: 18,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  cardInformation: {
    flexDirection: "row",
  },
  lineContainer: {
    width: "50%",
    paddingHorizontal: 10,
  },
  cardDetailsNames: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#383838",
  },
  cardDetails: {
    fontSize: 14,
    color: "#383838",
  },
  buttonContainer: {
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelledContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#rgba(161, 161, 161, 0.33)",
  },
  cancelledText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  cancelledCard: {
    width: "100%",
    height: 132,
    marginVertical: 7,
    paddingVertical: 18,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "space-between",
  },
});

export default styles;
