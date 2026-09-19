import { StyleSheet, Text, View } from "react-native";
export default function CustomText({
  text = "",
  type = "regular",
  customContainerStyle = {},
  customTextStyle = {},
}) {
  let textColor = null;
  switch (type) {
    case "regular":
      textColor = { color: "#101329" };
      break;
    case "error":
      textColor = styles.error;
      break;
    case "label":
      textColor = styles.label;
      break;
    case "label-xs":
      textColor = styles.labelXS;
      break;
  }
  return (
    <View style={[styles.container, customContainerStyle]}>
      <Text style={[{ textAlign: "start" }, textColor, customTextStyle]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 15,
    marginLeft: 10,
    minWidth: 300,
  },
  error: {
    color: "#a4133c",
  },
  label: {
    color: "#6c757d",
  },
  labelXS: {
    color: "#6c757d",
    fontSize: 12,
  },
});
