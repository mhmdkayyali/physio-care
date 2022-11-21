import { useEffect, useState } from "react";
import UserTextInput from "../../../components/UserTextInput";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Buttons from "../../../components/Buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SignupTwo({ navigation }) {
  const [data, setData] = useState();
  const [enteredInfo, setEnteredInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
  });

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setData(JSON.parse(res));
      })
      .catch((error) => console.log(error));
  }, []);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (value, key) => {
    setEnteredInfo((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const nextButtonHandler = () => {
    const data2 = {
      ...data,
      first_name: enteredInfo.first_name,
      last_name: enteredInfo.last_name,
      email: enteredInfo.email,
      password: enteredInfo.password,
      phone_number: enteredInfo.phone_number,
      gender: enteredInfo.gender,
      dob: enteredInfo.dob,
      specialty: enteredInfo.specialty,
      location: enteredInfo.location,
      rate: enteredInfo.rate,
      profile_picture: "",
    };
    storeData(data2);
    navigation.navigate("SignupPageThreeTherapist");
  };

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
