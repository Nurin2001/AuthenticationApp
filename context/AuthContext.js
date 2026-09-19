// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // load persisted session and mock user DB on app launch
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedUsers = await AsyncStorage.getItem("registeredUsersDB");
        const storedToken = await AsyncStorage.getItem("authToken");
        const storedUser = await AsyncStorage.getItem("userSession");

        if (storedUsers) {
          setRegisteredUsers(JSON.parse(storedUsers));
        }

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Failed to load auth session:", error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Helper function to generate a mock JWT token
  const generateMockToken = (userId) => {
    return `mock-jwt-token-${userId}-${Date.now()}`;
  };

  const signup = async (name, email, password) => {
    // check if user exist
    const existingUser = registeredUsers.find((u) => u.email === email);
    if (existingUser) {
      Toast.show({
        type: "error",
        text1: "An account with this email already exists.",
        position: "bottom",
      });
      throw new Error("An account with this email already exists.");
    }

    // create new user
    const newUser = { id: Date.now().toString(), name, email, password };
    const updatedUsers = [...registeredUsers, newUser];

    // generate mock token
    const mockToken = generateMockToken(newUser.id);
    const userSessionData = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    // update context state
    setRegisteredUsers(updatedUsers);
    setUser(userSessionData);
    setToken(mockToken);

    console.log("registered user:", updatedUsers);

    // persist data to AsyncStorage
    await AsyncStorage.setItem(
      "registeredUsersDB",
      JSON.stringify(updatedUsers)
    );
    await AsyncStorage.setItem("authToken", mockToken);
    await AsyncStorage.setItem("userSession", JSON.stringify(userSessionData));
  };

  const login = async (email, password) => {
    // verify user credentials against local mock DB
    const foundUser = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      Toast.show({
        type: "error",
        text1: "Wrong email or password.",
        position: "bottom",
      });
      throw new Error("Wrong email or password.");
    }

    // generate mock token
    const mockToken = generateMockToken(foundUser.id);
    const userSessionData = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
    };

    // update context state
    setUser(userSessionData);
    setToken(mockToken);

    // persist session
    await AsyncStorage.setItem("authToken", mockToken);
    await AsyncStorage.setItem("userSession", JSON.stringify(userSessionData));
  };

  const logout = async () => {
    try {
      setUser(null);
      setToken(null);
      await AsyncStorage.multiRemove(["authToken", "userSession"]);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
