import { useState } from "react";
import { View } from "react-native";
import Buttons from "../button/Buttons";
import styles from "./PressedTimeButton.styles";

function PressedTimeButton(props) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <View style={styles.buttonContainer}>
      <Buttons
        btnStyle={confirmed ? "confirmedButton" : "pressedTimeButton"}
        textStyle={confirmed ? "" : "pressedtimeButtonText"}
        btnText={props.slot}
        onPress={props.onPress}
      />
      {props.selected && (
        <Buttons
          btnStyle={"confirmTimeButton"}
          textStyle={"confirmTimeButtonText"}
          btnText={"CONFIRM"}
          onPress={() => {
            props.unselect();
            props.canChoose();
            setConfirmed(true);
            props.selectedTime(props.slot);
          }}
        />
      )}
    </View>
  );
}

export default PressedTimeButton;
