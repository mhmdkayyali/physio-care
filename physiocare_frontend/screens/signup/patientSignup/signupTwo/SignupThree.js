import { useEffect, useState } from "react";
import UserTextInput from "../../../components/UserTextInput";
import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import Buttons from "../../../components/Buttons";
import { ScrollView } from "react-native-gesture-handler";

function SignupThree({ navigation, route }) {
  const user = route.params.user;

  const [enteredInfo, setEnteredInfo] = useState({
    gender: "",
    dob: "",
    diagnosis: "",
    case_date: "",
    treating_doctor: "",
  });

  function handleInputChange(value, key) {
    setEnteredInfo((prev) => {
      return { ...prev, [key]: value };
    });
  }

  function nextButtonHandler() {
    navigation.navigate("SignupPageFourPatient", {
      user: {
        ...user,
        gender: enteredInfo.gender,
        dob: enteredInfo.dob,
        diagnosis: enteredInfo.diagnosis,
        case_date: enteredInfo.case_date,
        treating_doctor: enteredInfo.treating_doctor,
      },
    });
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.logo_login_container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/images/logo.png")}
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
}

export default SignupThree;