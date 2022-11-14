import { StyleSheet, View, Text } from "react-native";

function ProfileDisplay(props) {
  return (
    <View style={styles.profileInputContainer}>
      <Text style={styles.inputTitle}>{props.inputTitle}</Text>
      <Text style={styles.textInfo}>Neuromusculoskeletal</Text>
    </View>
  );
}
