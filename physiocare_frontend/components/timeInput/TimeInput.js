import { TextInput, StyleSheet } from "react-native";

function TimeInput(props) {
  return (
    <TextInput
      style={styles.TimeTextInput}
      placeholder={props.placeHolder}
      onChangeText={props.onChangeHandler}
    ></TextInput>
  );
}

export default TimeInput;

const styles = StyleSheet.create({
  TimeTextInput: {
    width: "43%",
    backgroundColor: "#FFFFFF",
    height: 32,
    borderRadius: 10,
    marginBottom: 16,
    textAlign: "center",
  },
});
