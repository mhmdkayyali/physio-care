import { useState, useEffect } from "react";
import Buttons from "../../components/button/Buttons";
import UserTextInput from "../../components/userTextInput/UserTextInput";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [token, setToken] = useState();
  const [data, setData] = useState();
  const [enteredInfo, setEnteredInfo] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (token) {
      navigation.navigate("DrawerNavigator", {
        screen: "HomeMap",
      });
    }
  }, []);

  useEffect(() => {
    getToken();
  }, []);

  const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };

  const storeUser = async (user) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setData(user);
    } catch (error) {
      console.log(error);
    }
  };

  const getToken = async (token) => {
    try {
      const token = await AsyncStorage.getItem("token");
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (value, key) => {
    setEnteredInfo((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const loginButtonHandler = () => {
    console.log("shu bekkkkkk");
    axios({
      headers: {
        access: "application/json",
      },
      method: "post",
      url: `${process.env.BASE_URL}auth/login`,
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
            screen: "HomeMap",
          });
        } else if (token && res.data.user.user_type === "THERAPIST") {
          navigation.navigate("DrawerNavigator", {
            screen: "HomeMap",
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
            source={require("../../assets/images/logo.png")}
          />
        </View>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "email")}
          placeHolder={"Email"}
          autoCapitalize={"none"}
        />
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "password")}
          placeHolder={"Password"}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.login_signup_container}>
        <Buttons btnText={"LOGIN"} onPress={loginButtonHandler} />
        <View style={styles.account_sign_up}>
          <Text>Don't have an account? </Text>
          <Pressable onPress={() => navigation.navigate("SignupOne")}>
            <Text style={styles.signup_btn}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
