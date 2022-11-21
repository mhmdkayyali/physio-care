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
});
