/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {

  useColorScheme,

} from 'react-native';


import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import SampleComponent from './src/SampleComponent';


const client = new ApolloClient({
  // uri: 'https://localhost:25080/graphql', //this is the local graphql url which i am not able to connect 
  uri: 'https://api.graphql.guide/graphql', //this is one of the sample project url i can able to connect

  cache: new InMemoryCache()
});


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: "white",
  };



  return (
    <ApolloProvider client={client}>
     <SampleComponent/>
    </ApolloProvider>

  );
};



export default App;
