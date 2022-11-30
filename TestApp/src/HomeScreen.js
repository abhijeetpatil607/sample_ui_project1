// // import React from 'react'
// // import { Text, FlatList, Pressable, View } from 'react-native'
// // import { gql, useQuery } from '@apollo/client'
// // // import { AppLoading } from 'expo'

// // import styles from './styles'

// // // const CHAPTERS_QUERY = gql`
// // //   query Chapters {
// // //     chapters {
// // //       id
// // //       number
// // //       title
// // //     }
// // //   }
// // // `

// // const CHAPTERS_QUERY = gql`
// // {
// //     employees{
// //         name,
// //        email,
// //        dob,
// //        doj,
// //        created_at,
// //        updated_at
// //        tasks {
// //          id
// //          title
// //        } 
// //     }
// //  }
// // `


// // export default ({ navigation }) => {
// //   const { data, loading } = useQuery(CHAPTERS_QUERY)

// //   return (
// //     <FlatList
// //       data={data}
// //       renderItem={({ item,i }) => {
// //         console.log("item",item)
// //         return (
// //             <>

// //             <View>
// //                 <Text>hiii</Text>
// //             </View>


// //             </>
// //         )
// //       }}
// //     />
// //   )
// // }


// // Example to Pick and Upload files in React Native
// // https://aboutreact.com/file-uploading-in-react-native/

// // Import React
// import React from 'react';
// // Import core components
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity
// } from 'react-native';




// const HomeScreen = ({navigation}) => {



//   return (
//     <View style={styles.mainBody}>
    
//     <Text>hii</Text>
//     </View>
//   );
// };
//     //     <CountryPicker
      
//     //     onHide={() => setIsShow(false)}
//     //     setCountryData={(callingCode) => setCountryData(callingCode)}
//     // />
// const styles = StyleSheet.create({
//   mainBody: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   buttonStyle: {
//     backgroundColor: '#307ecc',
//     borderWidth: 0,
//     color: '#FFFFFF',
//     borderColor: '#307ecc',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 15,
//   },
//   buttonTextStyle: {
//     color: '#FFFFFF',
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   textStyle: {
//     backgroundColor: '#fff',
//     fontSize: 15,
//     marginTop: 16,
//     marginLeft: 35,
//     marginRight: 35,
//     textAlign: 'center',
//   },

//   cc: {
//     height:100,
//     width:100
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   titleText: {
//     color: '#000',
//     fontSize: 25,
//     marginBottom: 25,
//     fontWeight: 'bold',
//   },
//   pickerTitleStyle: {
//     justifyContent: 'center',
//     flexDirection: 'row',
//     alignSelf: 'center',
//     fontWeight: 'bold',
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#000',
//   },
//   pickerStyle: {
//     height: 60,
//     width: 60,
//     marginBottom: 10,
//     justifyContent: 'center',
//     padding: 10,
//     borderWidth: 2,
//     borderColor: '#303030',
//     backgroundColor: 'white',
//   },
//   selectedCountryTextStyle: {
//     paddingLeft: 5,
//     paddingRight: 5,
//     color: '#000',
//     textAlign: 'right',
//   },

//   countryNameTextStyle: {
//     paddingLeft: 10,
//     color: '#000',
//     textAlign: 'right',
//   },

//   searchBarStyle: {
//     flex: 1,
//     justifyContent: 'center',
//     flexDirection: 'row',
//     marginLeft: 8,
//     marginRight: 10,
//   },


// });

// export default HomeScreen;