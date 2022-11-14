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
export default ProfilePicture;

const styles = StyleSheet.create({
  profilePictureContainer: {
    height: 138,
    width: 113,
  },
  profilePicture: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
});
