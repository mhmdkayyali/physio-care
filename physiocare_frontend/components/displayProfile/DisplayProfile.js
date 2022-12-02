import { View, Text } from "react-native";
import styles from "./DisplayProfile.styles";

function ProfileDisplay(props) {
  return (
    <View style={styles.profileInputContainer}>
      <Text style={styles.inputTitle}>{props.inputTitle}</Text>
      <Text style={styles.textInfo}>{props.inputContent}</Text>
    </View>
  );
}

export default ProfileDisplay;
