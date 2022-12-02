import * as React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import Buttons from "../../components/button/Buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import sendRequest from "../../config/axios";

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

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "#EFEFEF",
  },
  viewBtnSearchBarContainer: {
    zIndex: 1,
    width: "100%",
    height: 90,
    justifyContent: "space-between",
  },
  filterByTextBtnsContainer: {
    flexDirection: "row",
    marginBottom: 60,
    zIndex: 1,
  },
  filterParagraphContainer: {
    height: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: "rgba(131, 131, 131, 0.3)",
    marginTop: 5,
  },
  filterParagraph: {
    fontSize: 13,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 7,
    color: "#383838",
  },
  map: {
    height: "100%",
    width: "100%",
    marginTop: -165,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
});
