import { useEffect, useState } from "react";
import ProfileInput from "../../components/profileInput/ProfileInput";
import ProfilePicture from "../../components/profilePicture/ProfilePicture";
import Buttons from "../../components/button/Buttons";
import { View, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import baseUrl from "../../baseUrl/BaseUrl";

function Profile() {
  const [image, setImage] = useState();
  const [base64Image, setBase64Image] = useState(null);
  const [canEdit, setCanEdit] = useState(false);
  const [storageData, setStorageData] = useState();

  const canEditHandler = () => {
    setCanEdit(!canEdit);
  };

  const handleInputChange = (value, key) => {
    setStorageData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const handleAdditionalTherapistInputChange = (value, key) => {
    setStorageData((prev) => {
      return {
        ...prev,
        therapist_additional_informations: {
          ...prev.therapist_additional_informations,
          [key]: value,
        },
      };
    });
  };

  const handleAdditionalPatientInputChange = (value, key) => {
    setStorageData((prev) => {
      return {
        ...prev,
        pt_additional_informations: {
          ...prev.pt_additional_informations,
          [key]: value,
        },
      };
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
      base64: true,
    });

    handleAdditionalTherapistInputChange(result.base64, "profile_picture");
    if (!result.cancelled) {
      console.log("result", result);
      setImage(result.uri);
      setBase64Image(result.base64);
    }
  };

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setStorageData(JSON.parse(res));
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setImage(
      `${baseUrl}${storageData?.therapist_additional_informations?.profile_picture}`
    );
  }, [storageData]);

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
              axios
                .put(`${baseUrl}therapist`, storageData)
                .then((res) => {
                  setImage(`${baseUrl}${res.data}`);
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
  topMargin: {
    marginTop: 30,
  },
});
