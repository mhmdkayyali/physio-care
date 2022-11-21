import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Buttons from "../../../components/Buttons";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SignupThree({ navigation }) {
  const [data, setData] = useState();
  const [pin, setPin] = useState({
    latitude: 33.8912434,
    longitude: 35.5059952,
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
        <Buttons btnText={"NEXT"} onPress={nextButtonHandler} />
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
    flex: 2.7,
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
  mapTitleContainer: {
    flex: 3,
    width: "100%",
  },
  paragraphContainer: {},
  paragraph: {
    fontSize: 15,
    color: "#383838",
    marginBottom: 10,
  },
});
