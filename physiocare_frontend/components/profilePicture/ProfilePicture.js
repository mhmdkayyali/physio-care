import { StyleSheet, Image, View } from "react-native";

function ProfilePicture() {
  return (
    <View style={styles.profilePictureContainer}>
      <Image
        style={styles.profilePicture}
        source={require("../assets/images/doctor.jpg")}
      />
    </View>
  );
}
