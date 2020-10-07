import React from 'react';
import{Text,View,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const FacultyMembers=()=>{
    const Faculty=[
    {name:"Mr.A",key:'1'},
    {name:"Mr.B",key:'2'},
    {name:"Mr.C",key:'3'},];
    return(
        <View style={styles.viewStyle}>
        <FlatList
        data={Faculty}
        renderItem={function({item}){
            return(<Text style={styles.textStyle}>{item.name}</Text>)
        }}
        
        />
        </View>
    )

}

const styles=StyleSheet.create(
    {
        textStyle:{
            fontSize:40,
            color:'blue',
        },
        viewStyle:{

            borderColor:'red',
            borderWidth:5,
        }
    }
);

export default FacultyMembers;