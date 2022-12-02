import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    backgroundColor: "#EFEFEF",
  },
  logo_login_container: {
    width: "100%",
    alignItems: "center",
    marginTop: 50,
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
  mapTitleContainer: {
    flex: 3,
    width: "100%",
  },
  paragraphContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    fontSize: 17,
    color: "#383838",
    marginBottom: 20,
  },
  map: {
    height: 250,
    width: "100%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },
  userTypeText: {
    fontSize: 20,
  },
  btnContainer: {
    flex: 0.9,
    width: "100%",
  },
});

export default styles;
