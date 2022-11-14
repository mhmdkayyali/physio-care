import { StyleSheet, View } from "react-native";
import Buttons from "../button/Buttons";

function PressedTimeButton(props) {
  return (
    <View style={styles.buttonContainer}>
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

export default PressedTimeButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 5,
  },
});
