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
