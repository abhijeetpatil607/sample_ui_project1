import React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import { gql, useQuery } from '@apollo/client'


// const employeeQuery = gql`
// query{
//     employees{
//        id
//        name
//     }
//  }
// `
const employeeQuery = gql`
  query Chapters {
    chapters {
      id
      number
      title
    }
  }
`
const SampleComponent = () => {

    const { data } = useQuery(employeeQuery)

    console.log("data",data)
  return (
    <SafeAreaView>

    <FlatList
      data={data.chapters}
      renderItem={({item,key}) => {
        console.log("item",item)
        return (

          
          <>
          <View style={{height:40,justifyContent:"center",alignItems:"center",borderWidth:1,borderColor:"gray"}}>
          <Text>{item.number} {item.title}</Text>
     
          </View>
         
          </>
        );
      }}
      
    />
      {/* <Text> Public </Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SampleComponent;
