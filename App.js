import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from './LoginForm';
import Article from './Article';

class App extends Component {
  state={
    loggedIn: true
  }
   renderContent = () =>{
     switch(this.state.loggedIn){
      case true: 
        return <LoginForm/>

      case false:
        return <Article/>
     }
   }

   render(){
     return (
       <View style={styles.container}>
         {this.renderContent()}
       </View>
     )
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
