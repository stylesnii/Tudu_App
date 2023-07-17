import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Favorites = () => {  
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
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  }
});