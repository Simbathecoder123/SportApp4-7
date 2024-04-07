//import neccesary libraries
import React from "react";
import {View, Text, TouchableOpacity, SafeAreaView, Image, ImageBackground, StyleSheet} from "react-native"

export default class MainScreen extends React.Component{

render(){
    return(
        <View>
            <TouchableOpacity style = {styles.container}>
            <Text>Hello</Text>
            </TouchableOpacity>
        </View>
    )
}

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        //flex means how much of the screen to take up(1 means whole screen, 0.5 means half)
        backgroundColor : "red",
    },
    image:{
        height : 200,
        width : 200,
        resizeMode: "contain",
        alignContent : "center"
    },
    buttonStyle:{
        
    }
})