import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

const useLogic = () => {
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
      `${process.env.BASE_URL}${storageData?.therapist_additional_informations?.profile_picture}`
    );
  }, [storageData]);
  return {
    image,
    canEditHandler,
    handleInputChange,
    handleAdditionalPatientInputChange,
    handleAdditionalTherapistInputChange,
    pickImage,
    storageData,
    canEdit,
  };
};

export default useLogic;
