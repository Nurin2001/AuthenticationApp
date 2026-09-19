import { StyleSheet, View } from "react-native";
import CustomTouchableOpacity from "../components/customTouchableOpacity";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { useAuth } from "../context/AuthContext";
import CustomText from "../components/customText";
export default function Home() {
  const navigation = useNavigation();
  const { user, logout } = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomTouchableOpacity
          text="Log Out"
          onPress={() => logout()}
          customStyle={{
            minWidth: 100,
            margin: 0,
            padding: 0,
            backgroundColor: null,
            borderWidth: 0,
            minWidth: 0,
            minHeight: 0,
          }}
          isSecondary
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 15,
          borderWidth: 1,
          borderColor: "#CEDCF9",
          backgroundColor: "white",
          padding: 20,
          width: 300,
          minHeight: 180,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            width: "100%",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "#CEDCF9",
              borderRadius: 10,
            }}
          ></View>
          <CustomText
            text={user?.name ?? "-"}
            customTextStyle={{ fontSize: 20 }}
            customContainerStyle={{
              marginTop: 0,
              marginBottom: 0,
              justifyContent: "center",
              minWidth: 0,
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 5,
              alignItems: "flex-start",
            }}
          >
            <CustomText
              text={"Email"}
              type="label"
              customContainerStyle={{
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
                justifyContent: "center",
                minWidth: 0,
              }}
            />
            <CustomText
              text={`${user?.email ?? "-"}`}
              customContainerStyle={{
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
                justifyContent: "center",
                minWidth: 0,
                flex: 1,
              }}
              customTextStyle={{ textAlign: "right" }}
            />
          </View>
          <CustomText
            type="label-xs"
            text={`#${user?.id ?? "-"}`}
            customContainerStyle={{
              marginTop: 0,
              marginBottom: 0,
              marginLeft: 0,
              justifyContent: "center",
              minWidth: 0,
            }}
            customTextStyle={{ textAlign: "right" }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F7",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
