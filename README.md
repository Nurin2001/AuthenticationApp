## 📱 Demo

Watch the short video demonstration of the app in action:

[![React Native Auth App Demo](https://img.youtube.com/vi/FI138liZvgQ/0.jpg)](https://youtube.com/shorts/FI138liZvgQ)

> 💡 *Click the thumbnail above to watch the full YouTube Short demo.*

<img width="540" height="1170" alt="image" src="https://github.com/user-attachments/assets/1950a681-e875-4838-8b4d-3f430f6e12b0" />
<img width="540" height="1170" alt="image" src="https://github.com/user-attachments/assets/d2430159-d933-4039-b127-9378898af0b1" />
<img width="540" height="1170" alt="image" src="https://github.com/user-attachments/assets/25709744-6c60-4a8f-8386-a61dd4fd4870" />

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

---

##🔒 Security & Production Architecture Considerations
While this assessment uses local state and mock storage to simulate token emission and registration, a full production deployment would implement:

Hardware-Backed Secure Storage: Replacing AsyncStorage with react-native-keychain or Expo SecureStore for hardware-encrypted token persistence[cite: 1].

JWT Refresh Lifecycles: Implementing short-lived access tokens alongside HTTP-only refresh tokens handled through Axios response interceptors.


