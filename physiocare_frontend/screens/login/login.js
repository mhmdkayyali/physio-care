import Buttons from "../components/Buttons";
import UserTextInput from "../components/UserTextInput";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [token, setToken] = useState();

  const getToken = async (token) => {
    try {
      const token = await AsyncStorage.getItem("token");
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  const loginButtonHandler = () => {
    axios({
      headers: {
        access: "application/json",
      },
      method: "post",
      url: "http://192.168.43.32:8000/auth/login/",
      data: {
        email: enteredInfo.email,
        password: enteredInfo.password,
      },
    })
      .then(async (res) => {
        await storeToken(res.data.token);
        await storeUser(res.data.user);
        console.log(res.data);
        if (token && res.data.user.user_type === "PATIENT") {
          navigation.navigate("DrawerNavigator", {
            screen: "PatientLandingPage",
          });
        } else if (token && res.data.user.user_type === "THERAPIST") {
          navigation.navigate("DrawerNavigator", {
            screen: "ScheduleDrawer",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
