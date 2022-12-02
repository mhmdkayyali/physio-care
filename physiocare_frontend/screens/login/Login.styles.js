import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    backgroundColor: "#EFEFEF",
  },
  inputContainer: {
    width: "100%",
  },
  logo_login_container: {
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },

  logo: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  logoContainer: {
    width: 215,
    height: 215,
  },
  title: {
    fontSize: 26,
    color: "#383838",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },

  account_sign_up: {
    marginTop: 14,
    flexDirection: "row",
  },

  signup_btn: {
    color: "#35DB9F",
    fontSize: 15,
  },
  login_signup_container: {
    flex: 0.5,
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
