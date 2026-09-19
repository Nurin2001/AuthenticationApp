import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "../components/customTextInput";
import CustomTouchableOpacity from "../components/customTouchableOpacity";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import validator from "validator";
import { useAuth } from "../context/AuthContext";
import CustomText from "../components/customText";
export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State to hold any validation error messages
  const [error, setError] = useState([]);
  const [enabledSecureText, setEnableSecureText] = useState(true);
  const { login } = useAuth();

  // Function to validate the entered email
  const validateEmail = (input) => {
    // Check if the email input is empty
    if (!input) {
      setError("Email is required.");
      return;
    }
    // Update the email state with the input
    setEmail(input);
    // Check if the input is a valid email using the validator library
    if (validator.isEmail(input)) {
      // Clear email error if valid
      setError("");
    } else {
      setError("Please enter a valid email address.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 50 }}>
        <Text style={{ fontSize: 30 }}>Login</Text>
      </View>
      <CustomTextInput placeholder="Enter email" onChangeText={validateEmail} />
      {error != null && error != "" && <CustomText text={error} type="error" />}
      <CustomTextInput
        placeholder="Enter password"
        secureTextEntry={enabledSecureText}
        onChangeText={setPassword}
        hasEyeToggle={true}
        onPress={() => setEnableSecureText((prev) => !prev)}
      />
      <CustomTouchableOpacity
        disabled={email != "" && password != "" && error == "" ? false : true}
        text="Login"
        onPress={() => login(email, password)}
      />
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{}}>Don't have an account yet?</Text>
      </View>
      <CustomTouchableOpacity
        text="Sign Up"
        onPress={() => navigation.navigate("SignUp")}
        isSecondary={true}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F7",
    alignItems: "center",
    justifyContent: "center",
  },
});
