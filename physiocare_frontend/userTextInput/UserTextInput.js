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
