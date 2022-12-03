import { Text, View, Image } from "react-native";
import Buttons from "../../../../components/button/Buttons";
import TimeInput from "../../../../components/timeInput/TimeInput";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./SignupFourTherapist.styles";
import useLogic from "./SignupFourTherapist.logic";

const SignupFourTherapist = ({ navigation }) => {
  const { select, onPressHandler, handleInputChange, signupButtonHandler } =
    useLogic(navigation);

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
        <Buttons
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
