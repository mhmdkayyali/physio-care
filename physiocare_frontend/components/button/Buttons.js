import { View, Pressable, Text } from "react-native";
import styles from "./Buttons.styles";

function Buttons(props) {
  function btnStyle(type) {
    if (type === "userTypeButton") return styles.userTypeButton;
    if (type === "selectedUserTypeButton") return styles.selectedUserTypeButton;
    if (type === "attendedButton") return styles.attendedButton;
    if (type === "cancelButton") return styles.cancelButton;
    if (type === "yesButton") return styles.yesButton;
    if (type === "noButton") return styles.noButton;
    if (type === "listViewButton") return styles.listViewButton;
    if (type === "timeButton") return styles.timeButton;
    if (type === "pressedTimeButton") return styles.pressedTimeButton;
    if (type === "confirmTimeButton") return styles.confirmTimeButton;
    if (type === "availableDaysButton") return styles.availableDaysButton;
    if (type === "selectedAvailableDaysButton")
      return styles.selectedAvailableDaysButton;
    if (type === "saveButton") return styles.saveButton;
    if (type === "callButton") return styles.callButton;
    if (type === "confirmedButton") return styles.confirmedButton;
    return styles.button;
  }
  function textStyle(type) {
    if (type === "userTypeButtonText") return styles.userTypeButtonText;
    if (type === "selectedUserTypeButtonText")
      return styles.selectedUserTypeButtonText;
    if (type === "scheduleButtonText") return styles.scheduleButtonText;
    if (type === "yesButtonText") return styles.yesButtonText;
    if (type === "noButtonText") return styles.noButtonText;
    if (type === "listViewButtonText") return styles.listViewButtonText;
    if (type === "timeButtonText") return styles.timeButtonText;
    if (type === "pressedtimeButtonText") return styles.pressedtimeButtonText;
    if (type === "confirmTimeButtonText") return styles.confirmTimeButtonText;
    if (type === "availableDaysButtonText")
      return styles.availableDaysButtonText;
    if (type === "selectedAvailableDaysButtonText")
      return styles.selectedAvailableDaysButtonText;
    return styles.buttonText;
  }
  return (
    <Pressable style={btnStyle(props.btnStyle)} onPress={props.onPress}>
      <View>
        <Text style={textStyle(props.textStyle)}>{props.btnText}</Text>
      </View>
    </Pressable>
  );
}

export default Buttons;
