import MapView, { Marker } from "react-native-maps";

import styles from "./SignupFourPatient.styles";
import { Text, View, Image, Pressable } from "react-native";
import Buttons from "../../../../components/button/Buttons";
import useLogic from "./SignupFourPatient.logic";

const SignupFourPatient = ({ navigation, route }) => {
  const { signupButtonHandler, pin, setPin } = useLogic(navigation, route);

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
              ></Marker>
            </MapView>
          </View>
        </Pressable>
      </View>
      <View style={styles.btnContainer}>
        <Buttons btnText={"SIGN UP"} onPress={signupButtonHandler} />
      </View>
    </View>
  );
};

export default SignupFourPatient;
