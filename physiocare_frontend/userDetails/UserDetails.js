import ProfileDisplay from "../../components/ProfileDisplay";
import ProfilePicture from "../../components/ProfilePicture";
import Btn from "../../components/Btn";
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
        <Btn
          onPress={() =>
            navigation.navigate("SchedulingDay", { user: JSON.stringify(user) })
          }
          btnText={"BOOK A SESSION"}
        />
      </View>
    </View>
  );
}
