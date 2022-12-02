import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Buttons from "../../../../components/button/Buttons";
import TimeInput from "../../../../components/timeInput/TimeInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
import sendRequest from "../../../../config/axios";

const SignupFourTherapist = ({ navigation }) => {
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

  const [enteredInfo, setEnteredInfo] = useState({
    start_time: "",
    end_time: "",
  });

  const storeData = async (value) => {
    await AsyncStorage.setItem("user", JSON.stringify(value));
    console.log(value);
  };
  const onPressHandler = (value, key) => {
    setSelect((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const handleInputChange = (value, key) => {
    setEnteredInfo((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const signupButtonHandler = () => {
    const data2 = {
      ...data,
      ...select,
      ...enteredInfo,
    };
    storeData(data2);
    sendRequest({
      method: "post",
      url: "auth/therapist",
      data: {
        ...data,
        ...select,
        ...enteredInfo,
      },
    })
      .then((res) => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setData(JSON.parse(res));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ScrollView style={styles.appContainer}>
      <View style={styles.logo_login_container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../../assets/images/logo.png")}
          />
        </View>
        <Text style={styles.title}>Sign up</Text>
      </View>
      <View style={styles.userTypesContainer}>
        <View>
          <Text>Set available hours</Text>
          <View style={styles.availableTimeContainer}>
            <TimeInput
              onChangeHandler={(value) =>
                handleInputChange(value, "start_time")
              }
              placeHolder={"8:00"}
            />
            <View>
              <Text style={styles.dash}>-</Text>
            </View>
            <TimeInput
              onChangeHandler={(value) => handleInputChange(value, "end_time")}
              placeHolder={"17:00"}
            />
          </View>
          <View>
            <Text>Set available days</Text>
            <View>
              <Buttons
                btnStyle={
                  select.monday
                    ? "selectedAvailableDaysButton"
                    : "availableDaysButton"
                }
                textStyle={
                  select.monday
                    ? "selectedAvailableDaysButtonText"
                    : "availableDaysButtonText"
                }
                btnText={"Monday"}
                onPress={() => onPressHandler(!select.monday, "monday")}
              />
              <Buttons
                btnStyle={
                  select.tuesday
                    ? "selectedAvailableDaysButton"
                    : "availableDaysButton"
                }
                textStyle={
                  select.tuesday
                    ? "selectedAvailableDaysButtonText"
                    : "availableDaysButtonText"
                }
                btnText={"Tuesday"}
                onPress={() => onPressHandler(!select.tuesday, "tuesday")}
              />
              <Buttons
                btnStyle={
                  select.wednesday
                    ? "selectedAvailableDaysButton"
                    : "availableDaysButton"
                }
                textStyle={
                  select.wednesday
                    ? "selectedAvailableDaysButtonText"
                    : "availableDaysButtonText"
                }
                btnText={"Wednesday"}
                onPress={() => onPressHandler(!select.wednesday, "wednesday")}
              />
              <Buttons
                btnStyle={
                  select.thursday
                    ? "selectedAvailableDaysButton"
                    : "availableDaysButton"
                }
                textStyle={
                  select.thursday
                    ? "selectedAvailableDaysButtonText"
                    : "availableDaysButtonText"
                }
                btnText={"Thursday"}
                onPress={() => onPressHandler(!select.thursday, "thursday")}
              />
              <Buttons
                btnStyle={
                  select.friday
                    ? "selectedAvailableDaysButton"
                    : "availableDaysButton"
                }
                textStyle={
                  select.friday
                    ? "selectedAvailableDaysButtonText"
                    : "availableDaysButtonText"
                }
                btnText={"Friday"}
                onPress={() => onPressHandler(!select.friday, "friday")}
              />
              <Buttons
                btnStyle={
                  select.saturday
                    ? "selectedAvailableDaysButton"
                    : "availableDaysButton"
                }
                textStyle={
                  select.saturday
                    ? "selectedAvailableDaysButtonText"
                    : "availableDaysButtonText"
                }
                btnText={"Saturday"}
                onPress={() => onPressHandler(!select.saturday, "saturday")}
              />
              <Buttons
                btnStyle={
                  select.sunday
                    ? "selectedAvailableDaysButton"
                    : "availableDaysButton"
                }
                textStyle={
                  select.sunday
                    ? "selectedAvailableDaysButtonText"
                    : "availableDaysButtonText"
                }
                btnText={"Sunday"}
                onPress={() => onPressHandler(!select.sunday, "sunday")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Btn
          btnText={"SIGN UP"}
          onPress={() => {
            signupButtonHandler();
          }}
        />
      </View>
    </ScrollView>
  );
};

export default SignupFourTherapist;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#EFEFEF",
  },
  logo_login_container: {
    width: "100%",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 25,
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
  userTypesContainer: {
    flex: 4,
    width: "100%",
  },
  availableTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userTypeBtn: {
    height: 120,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },
  userTypeText: {
    fontSize: 20,
  },
  btnContainer: {
    marginTop: 40,
    width: "100%",
  },
  dash: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    color: "#FFFFFF",
  },
});
