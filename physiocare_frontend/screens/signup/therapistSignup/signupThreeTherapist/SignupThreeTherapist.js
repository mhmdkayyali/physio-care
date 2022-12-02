import { useEffect, useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import Buttons from "../../../../components/button/Buttons";
import MapView, { Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./SignupThreeTherapist.styles";

const SignupThreeTherapist = ({ navigation }) => {
  const [data, setData] = useState();
  const [pin, setPin] = useState({
    latitude: 33.8912434,
    longitude: 35.5059952,
  });

  const storeData = async (value) => {
    await AsyncStorage.setItem("user", JSON.stringify(value));
  };

  const nextButtonHandler = () => {
    const data2 = {
      ...data,
      ...pin,
    };
    storeData(data2);
    navigation.navigate("SignupFourTherapist");
  };

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setData(JSON.parse(res));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.appContainer}>
      <View style={styles.logo_login_container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../../assets/images/logo.png")}
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
              ></Marker>
            </MapView>
          </View>
        </Pressable>
      </View>
      <View style={styles.btnContainer}>
        <Buttons btnText={"NEXT"} onPress={nextButtonHandler} />
      </View>
    </View>
  );
};

export default SignupThreeTherapist;
