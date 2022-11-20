import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function UserCard(props) {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.cardContainer}>
      <View style={styles.cardDetailsContainer}>
        <Text style={styles.cardDetailsNames}>{props.userName}</Text>
        <Text style={styles.cardDetails}>{props.conditionSpecialty}</Text>
        <Text style={styles.cardDetails}>{props.location}</Text>
      </View>
    </Pressable>
  );
}

export default UserCard;
