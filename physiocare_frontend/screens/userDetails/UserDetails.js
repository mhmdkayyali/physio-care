import ProfileDisplay from "../../components/ProfileDisplay";
import ProfilePicture from "../../components/ProfilePicture";
import Buttons from "../../components/Buttons";
import { View, StyleSheet, ScrollView, Text } from "react-native";

function UserDetails({ navigation, route }) {
  const user = route.params.user;

  return (
    <View style={styles.appContainer}>
      <View style={styles.profilePictureContainer}>
        <ProfilePicture />
      </View>
      <View>
        <Text style={styles.therapistNameText}>
          {`${user.first_name} ${user.last_name}`}
        </Text>
      </View>
      <ScrollView>
        <ProfileDisplay
          inputContent={user.therapist_additional_informations.specialty}
          inputTitle={"SPECIALITY"}
        />
        <ProfileDisplay inputContent={user.location} inputTitle={"LOCATION"} />
        <ProfileDisplay
          inputContent={`${user.therapist_additional_informations.rate} $`}
          inputTitle={"RATE PER SESSION"}
        />
      </ScrollView>
      <View style={styles.btnContainer}>
        <Buttons
          onPress={() =>
            navigation.navigate("SchedulingDay", { user: JSON.stringify(user) })
          }
          btnText={"BOOK A SESSION"}
        />
      </View>
    </View>
  );
}

export default UserDetails;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profilePictureContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 14,
  },
  btnContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  therapistNameText: {
    fontSize: 22,
    color: "#383838",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});