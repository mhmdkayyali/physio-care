import UserTextInput from "../../../../components/userTextInput/UserTextInput";
import { Text, View, Image } from "react-native";
import Buttons from "../../../../components/button/Buttons";
import { ScrollView } from "react-native-gesture-handler";

function SignupTwoPatient({ navigation, route }) {
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
    navigation.navigate("SignupThreePatient", {
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
            source={require("../../../../assets/images/logo.png")}
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
        <Buttons
          btnText={"NEXT"}
          onPress={() => {
            nextButtonHandler();
          }}
        />
      </View>
    </View>
  );
}

export default SignupTwoPatient;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    backgroundColor: "#EFEFEF",
  },
  logo_login_container: {
    width: "100%",
    alignItems: "center",
    marginTop: 50,
    flex: 0.85,
  },
  logoContainer: {
    width: 215,
    height: 215,
  },
  logo: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 26,
    color: "#383838",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 3,
    width: "100%",
  },
  paragraphContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    fontSize: 20,
    color: "#383838",
    marginBottom: 27,
  },
  userTypeBtn: {
    height: 120,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },
  userTypeText: {
    fontSize: 20,
  },
  btnContainer: {
    flex: 0.29,
    width: "100%",
  },
});
