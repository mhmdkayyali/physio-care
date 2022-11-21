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
    flex: 0.85,
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
  inputContainer: {
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
  userTypeBtn: {
    height: 120,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },
  userTypeText: {
    fontSize: 20,
  },
  btnContainer: {
    flex: 0.29,
    width: "100%",
  },
});
