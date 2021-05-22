import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  Linking
} from 'react-native';
import firebase from 'firebase';
import * as WebBrowser from 'expo-web-browser';
import Home from './Home';

export default class CovidNews extends Component{
  render() {
    return(
      <View style= {styles.MainContainer}>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 30,
        color : 'red'
      }}>
      Symptons  
      </Text>
       <Text style = {{
        fontWeight : 'bold',
        fontSize : 20, 
        color : 'black'
      }}>
      1) Dry Cough     {'\n'}
      2) Fever     {'\n'}
      3) Tiredness   {'\n'}
      4) Diarrhoea    {'\n'}
      5) A Rash on Skin, or Discolouration of Fingers or Toes   {'\n'}
      6) Loss of Speech or Movement   {'\n'}
      7) Chest Pain or Pressure   {'\n'}
      8) Headache   {'\n'}
      9) Conjunctivitis   {'\n'}
      10) Loss of Taste or Smell   {'\n'}
      11) Sore Throat   {'\n'}
      </Text>

      <Text style = {{
        fontWeight : 'bold',
        fontSize : 30,
        color : 'red'
      }}>
      Precautions  
      </Text>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 20, 
        color : 'black'
      }}>
      1) Always wear a Mask and Drink a Hot Water   {'\n'}
      3) Always Be Active  {'\n'}
      4) Always Do Exercise   {'\n'}
      5) Never Go in Groups or Rallies  {'\n'}
      </Text>
       <TouchableOpacity
      onPress = {()=>{
        this.props.navigation.navigate('Home')
      }}>
      <Image style = {{
        height : 20,
        width : 20,
        marginLeft : 10,
        marginTop : 10
      }}
      source = {require('../assets/back.png')}
      />
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create(
{
 
MainContainer: 
{
 
flex: 1,
 
// Set content's vertical alignment.
justifyContent: 'center',
 
// Set content's horizontal alignment.
alignItems: 'center',
 
// Set hex color code here.
backgroundColor: 'cyan',
 
}
 
});
