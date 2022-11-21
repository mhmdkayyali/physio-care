import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Buttons from "../../../components/Buttons";

function SignupPageFourPatient({ navigation, route }) {
  const user = route.params.user;

  useEffect(() => {
    console.log(lastInfo);
  }, [pin]);

  const [pin, setPin] = useState({
    latitude: 33.8912434,
    longitude: 35.5059952,
  });

  const [lastInfo, setLastInfo] = useState({});

  useEffect(() => {
    setLastInfo({
      ...user,
      ...pin,
    });
  }, []);

  function signupButtonHandler() {
    axios({
      headers: {
        access: "application/json",
      },
      method: "post",
      url: "http://192.168.44.109:8000/auth/patient",
      data: lastInfo,
    })
      .then((res) => {
        console.log(res.data);
        navigation.navigate(
          "DrawerNavigator",
          {
            screen: "PatientLandingPage",
          },
          {
            token: res.data.token,
          }
        );
      })
      .catch((error) => {
        console.log(error);
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
      <View style={styles.mapTitleContainer}>
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>Enter your location</Text>
        </View>
        <Pressable>
          <View style={styles.map}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 33.8912434,
                longitude: 35.5059952,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              provider="google"
            >
              <Marker
                coordinate={pin}
                pinColor={"#1A7C6B"}
                draggable={true}
                onDragStart={(e) => {
                  console.log("Drag start", e.nativeEvent.coordinate);
                }}
                onDragEnd={(e) => {
                  setPin({
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude,
                  });
                }}
              >
                <Callout>
                  <Text>Mohammad Al Kayyali</Text>
                </Callout>
              </Marker>
              <Circle center={pin} radius={1000} />
            </MapView>
          </View>
        </Pressable>
      </View>
      <View style={styles.btnContainer}>
        <Buttons btnText={"SIGN UP"} onPress={signupButtonHandler} />
      </View>
    </View>
  );
}

export default SignupPageFourPatient;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    backgroundColor: "#EFEFEF",
  },
});
