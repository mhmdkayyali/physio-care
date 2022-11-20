import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function UserCard(props) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("UserDetails", { user: props.user })}
      style={styles.cardContainer}
    >
      <View style={styles.pictureContainer}>
        {props.userType === "THERAPIST" ? (
          <Image
            style={styles.picture}
            source={require("../assets/images/doctor.jpg")}
          />
        ) : (
          <View
            style={props.gender === "MALE" ? styles.male : styles.female}
          ></View>
        )}
      </View>
      <View style={styles.cardDetailsContainer}>
        <Text style={styles.cardDetailsNames}>{props.userName}</Text>
        <Text style={styles.cardDetails}>{props.conditionSpecialty}</Text>
        <Text style={styles.cardDetails}>{props.location}</Text>
      </View>
    </Pressable>
  );
}

export default UserCard;
