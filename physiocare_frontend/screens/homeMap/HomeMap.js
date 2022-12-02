import * as React from "react";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import Buttons from "../../components/button/Buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import sendRequest from "../../config/axios";
import styles from "./HomeMap.styles";

const HomeMap = ({ navigation }) => {
  const [therapists, setTherapists] = useState([]);
  const [patients, setPatients] = useState([]);
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };
  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      setUser(JSON.parse(user));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
    getUser();
  }, []);

  const getAllTherapists = () => {
    sendRequest({ method: "GET", url: "therapist" })
      .then((res) => {
        setTherapists(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPatients = () => {
    sendRequest({
      method: "GET",
      url: `patient/appointment/${user.id}/THERAPIST`,
    })
      .then((res) => {
        setPatients(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    user?.user_type === "THERAPIST" ? getPatients() : getAllTherapists();
  }, [user]);

  const listViewBtnHandler = () => {
    navigation.navigate("UserListView");
  };

  if (!user || !therapists) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.viewBtnSearchBarContainer}>
        <Buttons
          btnStyle={"listViewButton"}
          textStyle={"listViewButtonText"}
          onPress={listViewBtnHandler}
          btnText={"LIST VIEW"}
        />
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          longitude: user.longitude,
          latitude: user.latitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Circle
          center={{ longitude: user.longitude, latitude: user.latitude }}
          radius={2000}
        />
        <Marker
          coordinate={{ longitude: user.longitude, latitude: user.latitude }}
          pinColor={"red"}
        >
          <Callout>
            <Text>
              {user.first_name} {user.last_name}
            </Text>
          </Callout>
        </Marker>

        {user.user_type === "PATIENT"
          ? therapists.map((therapist) => {
              return (
                <Marker
                  coordinate={{
                    longitude: therapist.longitude,
                    latitude: therapist.latitude,
                  }}
                  pinColor={"#1A7C6B"}
                  key={therapist.id}
                >
                  <Callout>
                    <Text>
                      {therapist.first_name} {therapist.last_name}
                    </Text>
                  </Callout>
                </Marker>
              );
            })
          : patients?.map((patient) => {
              return (
                <Marker
                  coordinate={{
                    longitude: patient.patient.longitude,
                    latitude: patient.patient.latitude,
                  }}
                  pinColor={"#1A7C6B"}
                  key={patient.id}
                >
                  <Callout>
                    <Text>
                      {patient.patient.first_name} {patient.patient.last_name}
                    </Text>
                  </Callout>
                </Marker>
              );
            })}
      </MapView>
    </View>
  );
};

export default HomeMap;
