import AuthNavigation from "./navigation/authNav";
import { AuthProvider } from "./context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthNavigation />
        <Toast />
      </NavigationContainer>
    </AuthProvider>
  );
}
