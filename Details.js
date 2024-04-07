// import React, { Component } from "react";
// import { Text, View, StyleSheet } from 'react-native';

// const url = 'https://baseball-data.p.rapidapi.com/tournament/list';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '94f8e88a3emsh7a3366b9fb016dbp1dbc64jsn8236d2d4caac',
//     'X-RapidAPI-Host': 'baseball-data.p.rapidapi.com'
//   }
// };

// export default class DetailsScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       respText: '',
//     };
//   }

//   async componentDidMount() {
//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       const respText = JSON.stringify(result);
//       this.setState({ respText });
//       console.log("Result from API: " + respText);
//     } catch (error) {
//       console.log("API Call failed");
//       console.error(error);
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>
//           {this.state.respText}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#000',
//     fontSize: 11,
//   },
// });

// // export default DetailsScreen;




import React from 'react'
import{View,Text,StyleSheet}from 'react-native'


export default class DetailsScreen extends React.Component{


render(){
  return(

<View>
<Text style={{color:"purple",fontSize:30,fontWeight:"bold",alignContent:"center"}}>
DetailsScreen
</Text>
</View>

  )
}

}