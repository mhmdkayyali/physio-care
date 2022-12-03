import UserTextInput from "../../../../components/userTextInput/UserTextInput";
import { Text, View, Image } from "react-native";
import Buttons from "../../../../components/button/Buttons";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./SignupThreePatient.styles";
import useLogic from "./SignupThreePatient.logic";

const SignupThreePatient = ({ navigation, route }) => {
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
          onChangeHandler={(value) => handleInputChange(value, "diagnosis")}
          placeHolder={"Diagnosis"}
        />
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "case_date")}
          placeHolder={"Case date"}
          keyboardType={"numeric"}
        />
        <UserTextInput
          onChangeHandler={(value) =>
            handleInputChange(value, "treating_doctor")
          }
          placeHolder={"Treating doctor"}
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

export default SignupThreePatient;
