import { TextInput, View, Text } from "react-native";
import styles from "./ProfileInput.styles";

function ProfileInput(props) {
  const checkEdit = (canEdit) => {
    if (canEdit) {
      return styles.canEdittextInput;
    } else {
      styles.textInput;
    }
  };

  return (
    <View style={styles.profileInputContainer}>
      <Text style={styles.inputTitle}>{props.inputTitle}</Text>
      <TextInput
        style={checkEdit(props.canEdit)}
        onChangeText={(value) => {
          props.changeInput(value);
        }}
        editable={props.canEdit}
        value={props.value}
        defaultValue={props.defaultValue}
      />
    </View>
  );
}

export default ProfileInput;
