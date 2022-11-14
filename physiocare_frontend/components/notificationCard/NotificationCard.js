import { StyleSheet, Text, View } from "react-native";

function NotificationCard(props) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardDetailsContainer}>
        <View style={styles.nameTime}>
          <Text style={styles.cardDetailsNames}>{props.userName}</Text>
          <Text>{props.receivedTime}</Text>
        </View>
        <Text style={styles.cardDetails}>{props.notificationMessage}</Text>
      </View>
    </View>
  );
}

export default NotificationCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    width: "100%",
    height: 95,
    marginVertical: 10,
    paddingVertical: 18,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#383838",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    overflow: "hidden",
  },
});
