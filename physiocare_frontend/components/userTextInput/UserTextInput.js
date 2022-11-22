import { TextInput, StyleSheet } from "react-native";

function UserTextInput(props) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={props.placeHolder}
      onChangeText={props.onChangeHandler}
      secureTextEntry={props.secureTextEntry}
      autoCapitalize={props.autoCapitalize}
      keyboardType={props.keyboardType}
    ></TextInput>
  );
}

export default UserTextInput;

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 12,
  },
});
