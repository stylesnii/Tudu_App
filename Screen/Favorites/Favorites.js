import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Wishlist from './Wishlist';
import Stores from './Stores';

export const Favorites = () => {  
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate('Home');
    
  };
  return (
    <View style={styles.container}>
      <View style={styles.fixed}>
        <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
        <Text style={styles.titleText}>Favorites</Text>
      </View>

      <View style={styles.View}>
<Tab.Navigator  
      
      screenOptions={{
      
    tabBarLabelStyle: { fontSize: 12 },
    tabBarItemStyle: { width: 200 },
    tabBarStyle: { backgroundColor: 'white' },
  }}>


  <Tab.Screen name="Wishlist" component={Wishlist} />
  <Tab.Screen name="Stores" component={Stores} />
    </Tab.Navigator>
    </View>
   
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    
  },
  fixed: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    // backgroundColor: '#ff0',
  },
  titleText: {
    fontSize: 20,
    marginLeft: 50,
    color: 'grey',
  },
View:{
  flex:1,
},
});