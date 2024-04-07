import React from "react";
import { View, StyleSheet } from "react-native";
import RegisterScreen from "./Screens/Register";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "./config"; 

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RegisterScreen /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
