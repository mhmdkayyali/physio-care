import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#EFEFEF",
  },
  logo_login_container: {
    width: "100%",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 25,
    flex: 2.7,
  },
  logoContainer: {
    width: 215,
    height: 215,
  },
  logo: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 26,
    color: "#383838",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  userTypesContainer: {
    flex: 4,
    width: "100%",
  },
  availableTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userTypeBtn: {
    height: 120,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },
  userTypeText: {
    fontSize: 20,
  },
  btnContainer: {
    marginTop: 40,
    width: "100%",
  },
  dash: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    color: "#FFFFFF",
  },
});

export default styles;
