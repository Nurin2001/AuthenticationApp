import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function CustomTouchableOpacity({
  customStyle = null,
  text = "",
  setText = () => {},
  hasEyeToggle = false,
  onPress = () => {},
  isSecondary = false,
  ...props
}) {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.container,
          props?.disabled ? { backgroundColor: "#adb5bd" } : "",
          isSecondary ? { backgroundColor: "#CEDCF9" } : "",
          customStyle,
        ]}
        onPress={onPress}
        {...props}
      >
        <Text
          style={[styles.buttonText, isSecondary ? { color: "#072051" } : ""]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5383DF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#E9EBF2",
    borderWidth: 1,
    margin: 5,
    minWidth: 300,
    minHeight: 50,
  },
  buttonText: {
    color: "#FCFCFF",
  },
});
