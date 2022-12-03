import ProfileInput from "../../components/profileInput/ProfileInput";
import ProfilePicture from "../../components/profilePicture/ProfilePicture";
import Buttons from "../../components/button/Buttons";
import { View, ScrollView } from "react-native";
import sendRequest from "../../config/axios";
import styles from "./Profile.styles";
import useLogic from "./Profile.logic";

function Profile() {
  const {
    image,
    canEditHandler,
    handleInputChange,
    handleAdditionalPatientInputChange,
    pickImage,
    storageData,
    canEdit,
    handleAdditionalTherapistInputChange,
  } = useLogic();

  return (
    <View style={styles.appContainer}>
      {storageData?.user_type === "THERAPIST" ? (
        <View style={styles.profilePictureContainer}>
          <ProfilePicture image={image} onPress={pickImage} />
        </View>
      ) : (
        <View style={styles.topMargin}></View>
      )}
      <ScrollView>
        <ProfileInput
          inputTitle={"FIRST NAME"}
          canEdit={canEdit}
          changeInput={(value) => handleInputChange(value, "first_name")}
          value={storageData?.first_name}
        />
        <ProfileInput
          inputTitle={"LAST NAME"}
          canEdit={canEdit}
          changeInput={(value) => handleInputChange(value, "last_name")}
          value={storageData?.last_name}
        />
        <ProfileInput
          inputTitle={"EMAIL"}
          canEdit={canEdit}
          changeInput={(value) => handleInputChange(value, "email")}
          value={storageData?.email}
        />
        <ProfileInput
          inputTitle={"PHONE NUMBER"}
          canEdit={canEdit}
          changeInput={(value) => handleInputChange(value, "phone_number")}
          value={storageData?.phone_number}
        />
        <ProfileInput
          inputTitle={"DATE OF BIRTH"}
          canEdit={canEdit}
          changeInput={(value) => handleInputChange(value, "dob")}
          value={storageData?.dob.split("T")[0]}
        />
        {storageData?.user_type === "THERAPIST" ? (
          <>
            <ProfileInput
              inputTitle={"SPECIALITY"}
              canEdit={canEdit}
              changeInput={(value) =>
                handleAdditionalTherapistInputChange(value, "specialty")
              }
              value={storageData?.therapist_additional_informations.specialty}
            />
          </>
        ) : (
          <>
            <ProfileInput
              inputTitle={"DIAGNOSIS"}
              canEdit={canEdit}
              changeInput={(value) =>
                handleAdditionalPatientInputChange(value, "diagnosis")
              }
              value={storageData?.pt_additional_informations?.diagnosis}
            />
            <ProfileInput
              inputTitle={"CASE DATE"}
              canEdit={canEdit}
              changeInput={(value) =>
                handleAdditionalPatientInputChange(value, "case_date")
              }
              value={
                storageData?.pt_additional_informations?.case_date.split("T")[0]
              }
            />
            <ProfileInput
              inputTitle={"TREATING DOCTOR"}
              canEdit={canEdit}
              changeInput={(value) =>
                handleAdditionalPatientInputChange(value, "treating_doctor")
              }
              value={storageData?.pt_additional_informations?.treating_doctor}
            />
          </>
        )}
      </ScrollView>
      <View style={styles.btnContainer}>
        <Buttons
          btnText={canEdit ? "SAVE" : "EDIT"}
          onPress={() => {
            canEditHandler();
            if (canEdit) {
              sendRequest({
                method: "put",
                url: "therapist",
                data: storageData,
              })
                .then((res) => {
                  setImage(`${process.env.BASE_URL}${res.data}`);
                })
                .catch((error) => console.log(error));
            }
          }}
          btnStyle={canEdit ? "saveButton" : null}
        />
      </View>
    </View>
  );
}

export default Profile;
