import { useEffect, useState } from "react";
import UserTextInput from "../../../components/UserTextInput";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Buttons from "../../../components/Buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SignupTwo({ navigation }) {
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
