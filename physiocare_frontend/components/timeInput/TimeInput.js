import { TextInput } from "react-native";
import styles from "./TimeInput.styles";

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
