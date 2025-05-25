How to Start?

npx create-expo-app counter --template blank -> This creates a new Expo project in a folder named counter with a blank template.

cd counter -> Navigate into the counter project

npx expo install react-native-web react-dom @expo/metro-runtime -> Install additional packages for Web support (e.g. preview project in your browser)

npx expo start -> This opens a local dev server in your browser.
	•	Press w to launch the app in your web browser
	•	Press i for iOS simulator (only works on macOS with Xcode installed)
	•	Press a for Android emulator (if installed)
	•	Scan the QR code to test on your phone using Expo Go