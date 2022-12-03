import UserTextInput from "../../../../components/userTextInput/UserTextInput";
import { Text, View, Image, ScrollView } from "react-native";
import Buttons from "../../../../components/button/Buttons";
import styles from "./SignupTwoTherapist.styles";
import useLogic from "./SignupTwoTherapist.logic";

const SignupTwoTherapist = ({ navigation }) => {
  const {
    handleInputChange,
    nextButtonHandler,
    confirmedPassword,
    enteredInfo,
    setConfirmedPassword,
  } = useLogic(navigation);

  return (
    <View style={styles.appContainer}>
      <View style={styles.logo_login_container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../../assets/images/logo.png")}
          />
        </View>
        <Text style={styles.title}>Sign up</Text>
      </View>
      <ScrollView style={styles.inputContainer}>
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "first_name")}
          placeHolder={"First name"}
        />
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "last_name")}
          placeHolder={"Last name"}
        />
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
        <UserTextInput
          onChangeHandler={(value) => {
            handleInputChange(value, "confirmPassword");
          }}
          placeHolder={"Confirm password"}
          secureTextEntry={true}
          textInput={confirmedPassword ? "textInput" : "incorrectPassword"}
        />
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "phone_number")}
          placeHolder={"Phone number"}
          keyboardType={"numeric"}
        />
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "gender")}
          placeHolder={"Gender"}
          autoCapitalize={"characters"}
        />
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "dob")}
          placeHolder={"Date of birth"}
          keyboardType={"numeric"}
        />
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "specialty")}
          placeHolder={"Specialty"}
        />
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "location")}
          placeHolder={"Location"}
        />
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "rate")}
          placeHolder={"Rate"}
        />
      </ScrollView>
      <View style={styles.btnContainer}>
        <Buttons
          btnText={"NEXT"}
          onPress={() => {
            if (enteredInfo.password === enteredInfo.confirmPassword) {
              nextButtonHandler();
            } else {
              setConfirmedPassword(false);
            }
          }}
        />
      </View>
    </View>
  );
};

export default SignupTwoTherapist;
