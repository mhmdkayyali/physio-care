import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Buttons from "../../components/Buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SignupOne() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logo_login_container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo.png")}
          />
        </View>
        <Text style={styles.title}>Sign up</Text>
      </View>
      <View style={styles.userTypesContainer}>
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>What type of user are you?</Text>
        </View>
        <Buttons />
        <Buttons />
      </View>
      <View style={styles.btnContainer}>
        <Buttons />
        <View style={styles.account_login}>
          <Text>Already have an account? </Text>
          <Pressable>
            <Text style={styles.loginBtn}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default SignupOne;

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
  userTypesContainer: {
    flex: 3,
    width: "100%",
  },
  paragraphContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    fontSize: 20,
    color: "#383838",
    marginBottom: 27,
  },
  account_login: {
    marginTop: 10,
    flexDirection: "row",
  },
});
