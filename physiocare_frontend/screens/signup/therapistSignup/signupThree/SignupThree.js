import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Buttons from "../../../components/Buttons";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SignupThree({ navigation }) {
  const [data, setData] = useState();

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setData(JSON.parse(res));
      })
      .catch((error) => console.log(error));
  }, []);

  const storeData = async (value) => {
    await AsyncStorage.setItem("user", JSON.stringify(value));
  };

  const nextButtonHandler = () => {
    const data2 = {
      ...data,
      ...pin,
    };
    storeData(data2);
    navigation.navigate("SignupPageFourTherapist");
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
      <View style={styles.mapTitleContainer}>
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>Enter your Location</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Buttons btnText={"NEXT"} onPress={nextButtonHandler} />
      </View>
    </View>
  );
}
