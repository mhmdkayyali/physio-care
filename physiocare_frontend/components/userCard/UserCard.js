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

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 120,
    marginVertical: 7,
    paddingVertical: 18,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  pictureContainer: {
    width: 70,
    height: 85,
    marginRight: 20,
  },
  picture: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  cardDetailsContainer: {
    height: "97%",
    justifyContent: "space-between",
  },
  cardDetailsNames: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#383838",
  },
  cardDetails: {
    fontSize: 14,
    color: "#383838",
  },
});
