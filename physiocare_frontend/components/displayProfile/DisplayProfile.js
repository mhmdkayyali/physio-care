import { StyleSheet, View, Text } from "react-native";

function ProfileDisplay(props) {
  return (
    <View style={styles.profileInputContainer}>
      <Text style={styles.inputTitle}>{props.inputTitle}</Text>
      <Text style={styles.textInfo}>Neuromusculoskeletal</Text>
    </View>
  );
}

export default ProfileDisplay;

const styles = StyleSheet.create({
  profileInputContainer: {
    width: "100%",
    borderBottomWidth: 1,
    marginVertical: 16,
    borderColor: "#A1A1A1",
  },
  inputTitle: {
    color: "#A1A1A1",
    fontSize: 12,
    paddingLeft: 12,
  },
  textInfo: {
    fontSize: 20,
    paddingLeft: 12,
  },
});
