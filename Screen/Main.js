// The bottom navigation bar is created in this file.
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



// Screens
import {HomeScreen} from './Home/HomeScreen';
import {Cat} from './Categories/Cat';
import {Mainshop} from './Shop/Mainshop';
import {Favorites} from './Favorites/Favorites';
import {Profile} from './Profile/Profile';
import { Index } from './Index';


//Screen names
const homeName = "Home";
const catName = "Cart";
const shopName = "Shop";
const favName = "Favorites";
const profileName = "Profile";
const indexName = "Index"; //Is Now the HomeScreen

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === indexName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === catName) {
              iconName = focused ? 'format-list-bulleted-square' : 'format-list-checkbox';
            }
            else if (rn === shopName) {
              iconName = focused ? 'store' : 'store-outline';
            } else if (rn === favName) {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (rn === profileName) {
              iconName = focused ? 'account' : 'account-outline';
            }
            return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',
          tabBarShowLabel: false,
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: [{ display: "flex"},   
          null]
        }
          
      }>

        <Tab.Screen name={indexName} component={Index} />
        {/* <Tab.Screen name={homeName} component={HomeScreen} /> */}
        <Tab.Screen name={catName} component={Cat} />
        <Tab.Screen name={shopName} component={Mainshop} />
        <Tab.Screen name={favName} component={Favorites} />
        <Tab.Screen name={profileName} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Main;