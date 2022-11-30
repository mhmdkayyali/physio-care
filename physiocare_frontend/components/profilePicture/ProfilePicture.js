import { StyleSheet, Image, Pressable } from "react-native";

const ProfilePicture = (props) => {
  return (
    // <Pressable onPress={props.onPress}>
    <Pressable style={styles.profilePictureContainer} onPress={props.onPress}>
      <Image style={styles.profilePicture} source={{ uri: props.image }} />
    </Pressable>
    // </Pressable>
  );
};
export default ProfilePicture;

const styles = StyleSheet.create({
  profilePictureContainer: {
    backgroundColor: "rgba(53, 69, 219, 0.07)",
    borderRadius: 10,
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
