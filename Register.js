import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "../config";
import LoginScreen from "./Login";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  register = async (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Registration successful");
      })
      .catch((error) => {
        alert("Error during registration: " + error.message);
      });
  };

  signIn = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Sign-in successful");
      })
      .catch((error) => {
        alert("Error during signing in: " + error.message);
      });
  };


  handleForgotPassword = () => {
    const { email } = this.state;
    firebase.auth().sendResetLink(email)
      .then(() => {
        alert("Password reset email sent successfully. Please check your email.");
      })
      .catch(error => {
        alert("Error sending password reset email: " + error.message);
      });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Image
            source={require("../assets/login.png")}
            style={{
              width: "80%",
              height: 300,
              marginTop: "5%",
              alignSelf: "center",
              resizeMode: "center",
            }}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 50,
              alignSelf: "center",
            }}
          >
            REGISTER
          </Text>

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Entypo name="email" size={24} color="black" />
            <TextInput
              placeholder="ENTER YOUR EMAIL"
              onChangeText={(text) => this.setState({ email: text })}
              style={{
                backgroundColor: "lightblue",
                width: "90%",
                height: 35,
                borderBottomWidth: 2,
                paddingLeft: 10,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Entypo name="eye-with-line" size={24} color="black" />
            <TextInput
              placeholder="ENTER YOUR PASSWORD"
              onChangeText={(text) => this.setState({ password: text })}
              style={{
                backgroundColor: "lightblue",
                width: "90%",
                height: 35,
                borderBottomWidth: 2,
                paddingLeft: 10,
              }}
            />
          </View>
          <TouchableOpacity onPress={this.handleForgotPassword}>
            <Text
              style={{
                marginTop: 20,
                fontWeight: "bold",
                alignSelf: "flex-end",
                marginRight: 50,
              }}
            >
              FORGOT PASSWORD?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "lightblue",
              width: 120,
              height: 30,
              marginTop: 20,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
            onPress={() => this.register(this.state.email, this.state.password)}
          >
            <Text>SIGN UP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "lightblue",
              width: 120,
              height: 30,
              marginTop: 20,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
            onPress={()=>this.navigation.navigate("Login")}
          >
            <Text>SIGN IN</Text>
          </TouchableOpacity>


          <Text style={{ alignSelf: "center", marginTop: 10 }}>OR</Text>

          <TouchableOpacity
            style={{
              backgroundColor: "lightblue",
              borderRadius: 20,
              height: 30,
              width: 230,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 15,
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: "https://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg",
              }}
              style={{ width: 30, height: 30 }}
            />
            <Text>SIGN UP WITH GOOGLE</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
