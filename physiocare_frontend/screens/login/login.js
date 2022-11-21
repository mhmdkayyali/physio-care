import Buttons from "../components/Buttons";
import UserTextInput from "../components/UserTextInput";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [token, setToken] = useState();

  return (
    <View style={styles.appContainer}>
      <View style={styles.logo_login_container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/images/logo.png")}
          />
        </View>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <UserTextInput />
        <UserTextInput />
      </View>
      <View style={styles.login_signup_container}>
        <Buttons btnText={"LOGIN"} />
        <View style={styles.account_sign_up}>
          <Text>Don't have an account? </Text>
          <Pressable>
            <Text style={styles.signup_btn}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
