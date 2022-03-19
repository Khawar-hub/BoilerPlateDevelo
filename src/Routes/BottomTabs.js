import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { HomeStack } from './AppStack';
import {SvgXml} from 'react-native-svg'
import Quiz from '../screens/Quiz'
const BottomTab=()=> {
  return (
    <Tab.Navigator 
    screenOptions={{
     tabBarActiveTintColor:"#731D3A",
     tabBarInactiveTintColor:'#9D9D9D',
    }}>
     <Tab.Screen 
     name="HomeStack" 
     component={HomeStack}
     options={{
       headerShown:false,
       tabBarLabel: 'Home',
       title:'Welcome , John Doe',
       tabBarIcon: ({color}) => (
         <SvgXml  xml={`<svg xmlns="http://www.w3.org/2000/svg" width="22.78" height="25.9" viewBox="0 0 22.78 25.9">
         <g id="home-minimal" transform="translate(1.25 1.25)">
           <path id="Shape" d="M10.14,0,0,10.92V23.4H7.8V17.16h4.68V23.4h7.8V10.92Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/>
         </g>
       </svg>
       `} ></SvgXml>
       ),
     }}
     />
     <Tab.Screen 
     name="Profile" 
     component={Quiz}
     options={{
       headerShown:false,
       tabBarLabel: 'Quiz',
       title:'Welcome , John Doe',
       tabBarIcon: ({color}) => (
         <SvgXml  xml={`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25">
         <g id="single-01" transform="translate(0.5 0.5)">
           <path id="Shape" d="M19.5,3.728a1.5,1.5,0,0,0-.639-1.23A15.55,15.55,0,0,0,9.75.014,15.55,15.55,0,0,0,.639,2.5,1.5,1.5,0,0,0,0,3.728V7.514H19.5Z" transform="translate(0.75 15.736)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/>
           <circle id="Oval" cx="5.25" cy="5.25" r="5.25" transform="translate(5.25 0.75)" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/>
         </g>
       </svg>
       
         `} ></SvgXml>
       ),
     }}
     />
   </Tab.Navigator>
  );
}
export default BottomTab;