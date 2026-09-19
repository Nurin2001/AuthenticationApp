# Mobile Authentication App

A clean, robust React Native application built as a take-home assessment to demonstrate user authentication flows, form validation, state management, and conditional navigation routing.

---

## 🚀 Features Implemented

### 🔑 Authentication Flow & Persistence
- **Global Auth Management:** Built with React Context API (`AuthContext`) to manage user session state, sign-in, sign-up, and logout globally.
- **Session Persistence:** Integrated `@react-native-async-storage/async-storage` to persist tokens across app reboots.
- **Token-Based Routing:** Screen stacks dynamically re-render based on active token state.

### 📝 Form Handling & Validation
- **Real-Time Input Validation:** Form validation for email format and password length requirements.
- **Structured Error Handling:** Error state management using key-value object structures for precise UI updates.
- **Interactive UI Components:** Custom text inputs featuring an interactive eye icon toggle (`react-native-svg`) to switch password visibility.

### 🧭 Navigation & Architecture
- **Stack Navigation:** Integrated `@react-navigation/native-stack` with optimized native screen rendering via `react-native-screens` and `react-native-safe-area-context`.
- **Protected Routes:** Gated home screens accessible only upon successful authentication.

---

## 🛠️ Tech Stack & Dependencies

- **Framework:** React Native / Expo
- **State Management:** React Context API
- **Storage:** `@react-native-async-storage/async-storage`
- **Navigation:** `@react-navigation/native` & `@react-navigation/native-stack`
- **UI Components & Icons:** `react-native-svg`

---

## 💻 Setup & Installation Instructions

Follow these steps to run the application locally on your device or emulator:

### Prerequisites
1. Make sure you have Node.js and Yarn installed:
```
node -v
yarn -v
```
2. Clone the repo
```
git clone [https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git](https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git)
cd AuthenticationApp
```
3. Install Dependencies
```
yarn install
```
4. Run the Development Server
For expo:
```
yarn start
```
Press i for iOS Simulator, a for Android Emulator, or scan the QR code using the Expo Go app on a physical device.
For React Native CLI (Bare Workflow):
```
# iOS (macOS only)
cd ios && pod install && cd ..
yarn ios

# Android
yarn android
```

🔒 Security & Production Architecture Considerations
While this assessment uses local state and mock storage to simulate token emission and registration, a full production deployment would implement:

Hardware-Backed Secure Storage: Replacing AsyncStorage with react-native-keychain or Expo SecureStore for hardware-encrypted token persistence[cite: 1].

JWT Refresh Lifecycles: Implementing short-lived access tokens alongside HTTP-only refresh tokens handled through Axios response interceptors.

---
