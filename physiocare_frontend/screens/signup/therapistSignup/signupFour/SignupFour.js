import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import Buttons from "../../../components/Buttons";
import TimeInput from "../../../components/TimeInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

function SignupFour({ navigation }) {
  const [data, setData] = useState();
  const [select, setSelect] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setData(JSON.parse(res));
      })
      .catch((error) => console.log(error));
  }, []);

  const storeData = async (value) => {
    await AsyncStorage.setItem("user", JSON.stringify(value));
    console.log(value);
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
      <View style={styles.userTypesContainer}>
        <View>
          <Text>Set available hours</Text>
          <View style={styles.availableTimeContainer}>
            <TimeInput placeHolder={"8:00"} />
            <View>
              <Text style={styles.dash}>-</Text>
            </View>
            <TimeInput placeHolder={"17:00"} />
          </View>
          <View>
            <Text>Set available days</Text>
            <View>
              <Buttons />
              <Buttons />
              <Btn />
              <Buttons />
              <Buttons />
              <Buttons />
              <Buttons />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Btn btnText={"SIGN UP"} />
      </View>
    </View>
  );
}
