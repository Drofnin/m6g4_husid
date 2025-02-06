import {  StyleSheet, Text, View, ImageBackground } from 'react-native';
import  Button  from '../Button';

export default function HomeScreen() {
  return (
    <View 
      style= {{
        flex:1,
        justifyContent:"center",
        alignItems: "center",
      }}>
      <ImageBackground style ={styles.imagebackground}source={require('../../assets/images/kaka.jpg')}>

        <Text style= {styles.text}>Bakaríshúsið</Text>
        <Button text="toggle red"></Button>
        </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    color: 'white',
    fontSize:42,
    fontWeight: 'bold',
    textAlign: 'center',
    padding:20,

  },
 imagebackground: {
  width:'100%',
  height:'100%',
  flex:1, 
  resizeMode:'cover',
  justifyContent:'center',
 },
});
