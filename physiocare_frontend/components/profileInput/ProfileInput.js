import { TextInput, StyleSheet, View, Text } from "react-native";

function ProfileInput(props) {
  return (
    <View style={styles.profileInputContainer}>
      <Text style={styles.inputTitle}>{props.inputTitle}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => {
          props.changeInput(value);
        }}
        editable={props.canEdit}
        value={props.value}
      />
    </View>
  );
}

export default ProfileInput;
