import React from 'react';
import{Text,View,StyleSheet,Image} from 'react-native';


const Profile=()=>{
    return(
<View>
    <View style={styles.viewStyle}>
        <Image style={styles.imageStyle}
        source={require('./../../assets/Nico.jpg')}
        />
    </View>
    <Text style={styles.textStyle}>Name: Nabil Hossain Nico</Text>
    <Text style={styles.textStyle}>Student ID: 170042076</Text>
    <Text style={styles.textStyle}>Room no:none (Non Residential)</Text>
    <Text style={styles.textStyle}>Email: Hossaintalukder108@gmail.com</Text>
</View>
    )

}

const styles=StyleSheet.create(
    {
        textStyle:{
            fontSize:20,
            color:'black',
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

export default Profile;