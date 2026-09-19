import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "../components/customTextInput";
import CustomTouchableOpacity from "../components/customTouchableOpacity";
import { useNavigation } from "@react-navigation/native";
import validator from "validator";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import CustomText from "../components/customText";
export default function SignUp() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { signup } = useAuth();
  const [error, setError] = useState([]);
  const [enabledSecureText, setEnableSecureText] = useState(true);

  // Function to validate the entered email
  const validateEmail = (input) => {
    // Check if the email input is empty
    if (!input) {
      setError((prev) => ({ ...prev, email: "Email is required." }));
      return;
    }
    // Update the email state with the input
    setEmail(input);
    // Check if the input is a valid email using the validator library
    if (validator.isEmail(input)) {
      // Clear email error if valid
      setError((prev) => ({ ...prev, email: "" }));
    } else {
      setError((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
    }
  };
  const validatePassword = (input) => {
    if (!input) {
      setError((prev) => ({ ...prev, password: "Password is required." }));
      return;
    }
    setPassword(input);
    if (input.length < 6) {
      setError((prev) => ({
        ...prev,
        password: "Password must have at least 6 characters.",
      }));
    } else {
      // Clear password error if valid
      setError((prev) => ({ ...prev, password: "" }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 50 }}>
        <Text style={{ fontSize: 30 }}>Sign Up</Text>
      </View>
      <CustomTextInput placeholder="Enter name" onChangeText={setName} />
      {name == "" && <CustomText text="Name is missing." type="error" />}
      <CustomTextInput placeholder="Enter email" onChangeText={validateEmail} />
      {error?.email != null && error?.email != "" && (
        <CustomText text={error?.email} type="error" />
      )}
      <CustomTextInput
        placeholder="Enter password"
        secureTextEntry={enabledSecureText}
        onChangeText={validatePassword}
        hasEyeToggle={true}
        onPress={() => setEnableSecureText((prev) => !prev)}
      />
      {error?.password != null && error?.password != "" && (
        <CustomText text={error?.password} type="error" />
      )}
      <CustomTouchableOpacity
        text="Sign Up"
        onPress={() => signup(name, email, password)}
        disabled={
          error?.email == "" && error?.password == "" && name != ""
            ? false
            : true
        }
      />
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{}}>Already have an account?</Text>
      </View>
      <CustomTouchableOpacity
        text="Login"
        onPress={() => navigation.navigate("Login")}
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
