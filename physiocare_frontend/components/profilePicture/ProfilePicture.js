import { Image, Pressable } from "react-native";

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
