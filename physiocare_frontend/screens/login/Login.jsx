import Buttons from "../../components/button/Buttons";
import UserTextInput from "../../components/userTextInput/UserTextInput";
import { Text, View, Image, Pressable } from "react-native";
import styles from "./Login.styles";
import useLogic from "./Login.logic";

const Login = ({ navigation }) => {
  const { handleInputChange, loginButtonHandler } = useLogic(navigation);

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
