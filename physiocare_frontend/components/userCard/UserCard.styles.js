import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 120,
    marginVertical: 7,
    paddingVertical: 18,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  pictureContainer: {
    width: 70,
    height: 85,
    marginRight: 20,
  },
  picture: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  cardDetailsContainer: {
    height: "97%",
    justifyContent: "space-between",
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
  male: {
    backgroundColor: "rgba(53, 69, 219, 0.07)",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  female: {
    backgroundColor: "rgba(219, 53, 212, 0.07)",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default styles;
