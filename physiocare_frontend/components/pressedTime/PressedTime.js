import { StyleSheet, View } from "react-native";
import Buttons from "../button/Buttons";

function PressedTimeBtn(props) {
  return (
    <View style={styles.btnContainer}>
      <Buttons
        btnStyle={"pressedTimeBtn"}
        textStyle={"PressedtimeBtnText"}
        btnText={props.slot}
        onPress={props.onPress}
      />
      {props.selected && (
        <Buttons
          btnStyle={"confirmTimeBtn"}
          textStyle={"confirmTimeBtnText"}
          btnText={"CONFIRM"}
          onPress={() => {}}
        />
      )}
    </View>
  );
}
