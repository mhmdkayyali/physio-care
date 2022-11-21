import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Buttons from "../../../components/Buttons";

function SignupPageFourPatient({ navigation, route }) {
  const user = route.params.user;

  const [pin, setPin] = useState({
    latitude: 33.8912434,
    longitude: 35.5059952,
  });

  const [lastInfo, setLastInfo] = useState({});

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
          <Text style={styles.paragraph}>Enter your location</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Buttons btnText={"SIGN UP"} />
      </View>
    </View>
  );
}
