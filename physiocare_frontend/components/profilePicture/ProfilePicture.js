import { Image, Pressable } from "react-native";
import styles from "./ProfilePicture.styles";

const ProfilePicture = (props) => {
  return (
    <Pressable style={styles.profilePictureContainer} onPress={props.onPress}>
      <Image style={styles.profilePicture} source={{ uri: props.image }} />
    </Pressable>
  );
};
export default ProfilePicture;
