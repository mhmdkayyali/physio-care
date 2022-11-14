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
