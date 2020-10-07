import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/sreens/HomeScreen';
import Semesters from './src/sreens/Semesters';
import FacultyMembers from './src/sreens/FacultyMembers';
import Profile from './src/sreens/Profile';
const stack= createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="Semesters" component={Semesters}/>
        <stack.Screen name="FacultyMembers" component={FacultyMembers}/>
        <stack.Screen name="Profile" component={Profile}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

