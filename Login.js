import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Text
} from "react-native";

//import firebase from "firebase";


import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName:"",
      fontsLoaded: false,
      userSignedIn: false
    };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  signIn = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.replace("Dashboard");
      })
      .catch(error => {
        alert("Your username and/or password is wrong");
      });
  };
  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      const { email, password } = this.state;

      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

          <Text style={styles.appTitleText}>Sign In</Text>

          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ email: text })}
            placeholder={"Enter Email"}
            placeholderTextColor={"#FFFFFF"}
            autoFocus
          />
          <TextInput
            style={[styles.textinput, { marginTop: 20 }]}
            onChangeText={text => this.setState({ password: text })}
            placeholder={"Enter Password"}
            placeholderTextColor={"#FFFFFF"}
            secureTextEntry
          />
          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={() => this.signIn(email, password)}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.buttonTextNewUser}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00539C",
    alignItems: "center",
    justifyContent: "center"
  },
  appTitleText: {
    color: "#B85042",
    textAlign: "center",
  },
  textinput: {
    borderColor: "#EEA47F",
    color: "#B85042",
    backgroundColor: "#EEA47F",
    placeholderTextColor:"#B85042"
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#EEA47F",
  },
  buttonText: {
    color: "#B85042",
  },
  buttonTextNewUser: {
    color: "#B85042",
    textDecorationLine: 'underline'
  }
});

