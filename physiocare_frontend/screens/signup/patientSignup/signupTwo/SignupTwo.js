import UserTextInput from "../../../components/UserTextInput";
import { Text, View, Image } from "react-native";
import Buttons from "../../../components/Buttons";
import { ScrollView } from "react-native-gesture-handler";

function SignupTwo({ navigation, route }) {
  const user = route.params;
  const [enteredInfo, setEnteredInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
  });

  function handleInputChange(value, key) {
    setEnteredInfo((prev) => {
      return { ...prev, [key]: value };
    });
  }

  function nextButtonHandler() {
    navigation.navigate("SignupPageThreePatient", {
      user: {
        ...user,
        first_name: enteredInfo.first_name,
        last_name: enteredInfo.last_name,
        email: enteredInfo.email,
        password: enteredInfo.password,
        phone_number: enteredInfo.phone_number,
      },
    });
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.logo_login_container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/images/logo.png")}
          />
        </View>
        <Text style={styles.title}>Sign up</Text>
      </View>
      <ScrollView style={styles.inputContainer}>
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "first_name")}
          placeHolder={"First name"}
        />
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "last_name")}
          placeHolder={"Last name"}
        />
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "email")}
          placeHolder={"Email"}
          autoCapitalize={"none"}
        />
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "password")}
          placeHolder={"Password"}
          secureTextEntry={true}
        />
        <UserTextInput
          onChangeHandler={(value) => handleInputChange(value, "phone_number")}
          placeHolder={"Phone number"}
          keyboardType={"numeric"}
        />
      </ScrollView>
      <View style={styles.btnContainer}>
        <Buttons />
      </View>
    </View>
  );
}
