import { TextInput, StyleSheet, View, Text } from "react-native";

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
        // placeholder={props.placeHolder}
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

const styles = StyleSheet.create({
  profileInputContainer: {
    width: "100%",
    borderBottomWidth: 1,
    marginVertical: 16,
    borderColor: "#A1A1A1",
  },
  textInput: {
    width: "100%",
    fontSize: 20,
    borderRadius: 5,
    paddingLeft: 12,
    color: "#383838",
  },
  inputTitle: {
    color: "#A1A1A1",
    fontSize: 12,
    paddingLeft: 12,
  },
  canEdittextInput: {
    width: "95%",
    fontSize: 20,
    backgroundColor: "#E2E2E2",
    // height: 40,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 12,
    color: "#383838",
  },
});
