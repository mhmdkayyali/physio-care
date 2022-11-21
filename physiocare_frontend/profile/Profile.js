import { useEffect, useState } from "react";
import ProfileInput from "../components/ProfileInput";
import ProfilePicture from "../components/ProfilePicture";
import Buttons from "../components/Buttons";
import { View, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Profile() {
  const [canEdit, setCanEdit] = useState(false);
  const [storageData, setStorageData] = useState();
  const [info, setInfo] = useState({
    first_name: storageData?.first_name,
    last_name: storageData?.last_name,
    email: storageData?.email,
    phone_number: storageData?.phone_number,
    location: storageData?.location,
    diagnosis: storageData?.pt_additional_informations?.diagnosis,
    case_date: storageData?.pt_additional_informations?.case_date,
    treating_doctor: storageData?.pt_additional_informations?.treating_doctor,
    dob: storageData?.dob,
    specialty: storageData?.therapist_additional_informations?.specialty,
  });

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setStorageData(JSON.parse(res));
      })
      .catch((error) => console.log(error));
  }, []);

  function canEditHandler() {
    setCanEdit(!canEdit);
  }
  function handleInputChange(value, key) {
    setInfo((prev) => {
      return { ...prev, [key]: value };
    });
  }
  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setStorageData(JSON.parse(res));
        console.log("res", res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.appContainer}>
      {storageData?.user_type === "THERAPIST" ? (
        <View style={styles.profilePictureContainer}>
          <ProfilePicture />
        </View>
      ) : (
        <View style={styles.topMargin}></View>
      )}
      <ScrollView>
        <ProfileInput
          inputTitle={"FIRST NAME"}
          canEdit={canEdit}
          changeInput={(value) => handleInputChange(value, "first_name")}
          value={info.first_name}
          defaultValue={storageData?.first_name}
        />
        <ProfileInput
          inputTitle={"LAST NAME"}
          canEdit={canEdit}
          changeInput={(value) => handleInputChange(value, "last_name")}
          value={info.last_name}
          defaultValue={storageData?.last_name}
        />
        <ProfileInput
          inputTitle={"EMAIL"}
          canEdit={canEdit}
          changeInput={(value) => handleInputChange(value, "email")}
          value={info.email}
          defaultValue={storageData?.email}
        />
        <ProfileInput
          inputTitle={"PHONE NUMBER"}
          canEdit={canEdit}
          changeInput={(value) => handleInputChange(value, "phone_number")}
          value={info.phone_number}
          defaultValue={storageData?.phone_number}
        />
        <ProfileInput
          inputTitle={"DATE OF BIRTH"}
          canEdit={canEdit}
          changeInput={(value) => handleInputChange(value, "dob")}
          value={info.dob}
          defaultValue={storageData?.dob}
        />
        {storageData?.user_type === "THERAPIST" ? (
          <>
            <ProfileInput
              inputTitle={"SPECIALITY"}
              canEdit={canEdit}
              changeInput={(value) => handleInputChange(value, "specialty")}
              value={info.specialty}
              defaultValue={
                storageData?.therapist_additional_informations.specialty
              }
            />
          </>
        ) : (
          <>
            <ProfileInput
              inputTitle={"DIAGNOSIS"}
              canEdit={canEdit}
              changeInput={(value) => handleInputChange(value, "diagnosis")}
              value={info.diagnosis}
              defaultValue={storageData?.pt_additional_informations.diagnosis}
            />
            <ProfileInput
              inputTitle={"CASE DATE"}
              canEdit={canEdit}
              changeInput={(value) => handleInputChange(value, "case_date")}
              value={info.case_date}
              defaultValue={storageData?.pt_additional_informations.case_date}
            />
            <ProfileInput
              inputTitle={"TREATING DOCTOR"}
              canEdit={canEdit}
              changeInput={(value) =>
                handleInputChange(value, "treating_doctor")
              }
              value={info.treating_doctor}
              defaultValue={
                storageData?.pt_additional_informations.treating_doctor
              }
            />
          </>
        )}
      </ScrollView>
      <View style={styles.btnContainer}>
        <Buttons
          btnText={canEdit ? "SAVE" : "EDIT"}
          onPress={canEditHandler}
          btnStyle={canEdit ? "saveButton" : null}
        />
      </View>
    </View>
  );
}
