import UserTextInput from "../../../../components/userTextInput/UserTextInput";
import { Text, View, Image } from "react-native";
import Buttons from "../../../../components/button/Buttons";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./SignupTwoPatient.styles";
import useLogic from "./SignupTwoPatient.logic";

const SignupTwoPatient = ({ navigation, route }) => {
  const { handleInputChange, nextButtonHandler } = useLogic(navigation, route);

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
          onChangeHandler={(value) => handleInputChange(value, "phone_number")}
          placeHolder={"Phone number"}
          keyboardType={"numeric"}
        />
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "location")}
          placeHolder={"Location"}
        />
      </ScrollView>
      <View style={styles.btnContainer}>
        <Buttons
          btnText={"NEXT"}
          onPress={() => {
            nextButtonHandler();
          }}
        />
      </View>
    </View>
  );
};

export default SignupTwoPatient;
