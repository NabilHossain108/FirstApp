import React from 'react';
import{Text,View,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Semesters=()=>{
    const Sem=[
    {name:"1st",key:'1'},
    {name:"2nd",key:'2'},
    {name:"3rd",key:'3'},];
    return(
        <View style={styles.viewStyle}>
        <FlatList
        data={Sem}
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

export default Semesters;