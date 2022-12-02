import DisplayProfile from "../../components/displayProfile/DisplayProfile";
import ProfilePicture from "../../components/profilePicture/ProfilePicture";
import Buttons from "../../components/button/Buttons";
import { View, ScrollView, Text } from "react-native";
import styles from "./UserDetails.styles";

const UserDetails = ({ navigation, route }) => {
  const user = route.params.user;

  return (
    <View style={styles.appContainer}>
      {user?.user_type === "THERAPIST" ? (
        <>
          <View style={styles.profilePictureContainer}>
            <ProfilePicture
              image={`${process.env.BASE_URL}${user?.therapist_additional_informations?.profile_picture}`}
            />
          </View>
          <View>
            <Text style={styles.therapistNameText}>
              {`${user.first_name} ${user.last_name}`}
            </Text>
          </View>
          <ScrollView>
            <DisplayProfile
              inputContent={user.therapist_additional_informations.specialty}
              inputTitle={"SPECIALITY"}
            />
            <DisplayProfile
              inputContent={user.location}
              inputTitle={"LOCATION"}
            />
            <DisplayProfile
              inputContent={user.gender.toLowerCase()}
              inputTitle={"GENDER"}
            />
            <DisplayProfile inputContent={user.email} inputTitle={"EMAIL"} />
            <DisplayProfile
              inputContent={`${user.therapist_additional_informations.rate} $`}
              inputTitle={"RATE PER SESSION"}
            />
          </ScrollView>
          <View style={styles.btnContainer}>
            <Buttons
              onPress={() =>
                navigation.navigate("ScheduleDay", {
                  user: JSON.stringify(user),
                })
              }
              btnText={"BOOK A SESSION"}
            />
          </View>
        </>
      ) : (
        <>
          <View>
            <Text style={styles.therapistNameText}>
              {`${user.first_name} ${user.last_name}`}
            </Text>
          </View>
          <ScrollView>
            <DisplayProfile
              inputContent={user.pt_additional_informations.diagnosis}
              inputTitle={"diagnosis"}
            />
            <DisplayProfile
              inputContent={user.dob.split("T")[0]}
              inputTitle={"DATE OF BIRTH"}
            />
            <DisplayProfile
              inputContent={
                user.pt_additional_informations.case_date.split("T")[0]
              }
              inputTitle={"CASE DATE"}
            />
            <DisplayProfile
              inputContent={user.pt_additional_informations.treating_doctor}
              inputTitle={"TREATING DOCTOR"}
            />
            <DisplayProfile
              inputContent={user.location}
              inputTitle={"LOCATION"}
            />
            <DisplayProfile inputContent={user.email} inputTitle={"EMAIL"} />
            <DisplayProfile
              inputContent={user.gender.toLowerCase()}
              inputTitle={"GENDER"}
            />
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default UserDetails;
