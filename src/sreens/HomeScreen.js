import React from 'react';
import {Text,StyleSheet,Button,View,Image,TouchableOpacity} from 'react-native';

const HomeScreen =(props)=>{
    console.log(props);
    return(<View>
       
     
      <View style={styles.viewStyle} >
      <Image 
      source={require('./../../assets/logo.png')} style={styles.imageStyle}
      />
      </View>
      <Text></Text>
      <View style={styles.viewStyle}>
          <Text style={{fontSize:25}}>Department of CSE</Text>
          <Text style={{fontSize:25}}>Programme:SWE</Text>
      </View>
      <View style={styles.viewStyle}>
          <TouchableOpacity onPress={function(){
              props.navigation.navigate("Profile");    
              }}>
            <Text style={styles.textStyle}>My Profile</Text>

          </TouchableOpacity>
      </View>
      <Button
      title='Semester Wise  Course List'
      onPress={
          function(){
              props.navigation.navigate("Semesters");
          }
      }
      />
        <Button
      title='List of Faculty Members'
      onPress={
          function(){
              props.navigation.navigate("FacultyMembers");
          }
      }
      />
      

    </View>)
}

const styles=StyleSheet.create(
    {
        textStyle:{
            fontSize:30,
            color:'blue'
        },
        imageStyle:{
            height:200,
            width:120,
        },
        viewStyle:{
            justifyContent:'center',
            alignItems:'center',
        }
    }
);
export default HomeScreen;