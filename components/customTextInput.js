import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { EyeIcon } from "../assets/eye-open";
import { EyeClosedIcon } from "../assets/eye-closed";
export default function CustomTextInput({
  placeholder = "",
  customStyle = null,
  text = "",
  setText = () => {},
  hasEyeToggle = false,
  onPress = null,
  ...props
}) {
  return (
    <View style={customStyle ?? styles.container}>
      <TextInput placeholder={placeholder} {...props} style={{ flex: 1 }} />
      {hasEyeToggle && (
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text>
            {props?.secureTextEntry ? (
              <EyeIcon size={20} color="#072051" />
            ) : (
              <EyeClosedIcon size={20} color="#072051" />
            )}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FCFCFF",
    alignItems: "center",
    justifyContent: "between",
    borderRadius: 10,
    borderColor: "#E9EBF2",
    borderWidth: 1,
    margin: 5,
    paddingLeft: 10,
    minWidth: 300,
    minHeight: 50,
  },
  button: {
    backgroundColor: "#E7EFFD",
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },
});
