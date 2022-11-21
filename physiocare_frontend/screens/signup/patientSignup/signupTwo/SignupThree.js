import { useEffect, useState } from "react";
import UserTextInput from "../../../components/UserTextInput";
import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import Buttons from "../../../components/Buttons";
import { ScrollView } from "react-native-gesture-handler";

function SignupThree({ navigation, route }) {
  const user = route.params.user;
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
        <UserTextInput />
        <UserTextInput />
        <UserTextInput />
        <UserTextInput />
        <UserTextInput />
      </ScrollView>
      <View style={styles.btnContainer}>
        <Buttons />
      </View>
    </View>
  );
}
