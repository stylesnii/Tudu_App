import { TouchableOpacity,StyleSheet, Text, View,ScrollView,TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Profile = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.fixed}>
        <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
        <Text style={styles.titleText}>Profile</Text>
      </View>
      <ScrollView style={styles.main}>
        <Ionicons name="person"size={150} style={styles.person}/>
        <View style={styles.select}>
          <Ionicons name="person-outline"size={35} color="#0099ff"/>
          <Text style={styles.itemName}>My Account</Text>
          <Ionicons name="chevron-forward" marginLeft={10} size={35} color="#000"/>
        </View>
        <View style={styles.select}>
          <Ionicons name="pricetags-outline"size={35} color="#0099ff"/>
          <Text style={styles.itemName}>Orders</Text>
          <Ionicons name="chevron-forward" marginLeft={10} size={35} color="#000"/>
        </View>
        <View style={styles.select}>
          <Ionicons name="location"size={35} color="#0099ff"/>
          <Text style={styles.itemName}>Delivery Address</Text>
          <Ionicons name="chevron-forward" marginLeft={10} size={35} color="#000"/>
        </View>
        <View style={styles.select}>
          <Ionicons name="home"size={35} color="#0099ff"/>
          <Text style={styles.itemName}>Sell Central</Text>
          <Ionicons name="chevron-forward" marginLeft={10} size={35} color="#000"/>
        </View>
        <View style={styles.select}>
          <Ionicons name="help-circle-outline"size={35} color="#0099ff"/>
          <Text style={styles.itemName}>Help Center</Text>
          <Ionicons name="chevron-forward" marginLeft={10} size={35} color="#000"/>
        </View>
        <Text style={styles.signIn}> Sign In </Text>
      </ScrollView>
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
  },
  titleText: {
    fontSize: 20,
    marginLeft: 50,
    color: 'grey',
  },
  main: {
    marginTop: 50,
    // backgroundColor: '#f0f',
  },
  person: {
    borderRadius: 100,
    borderWidth: 0.5,
    alignSelf: 'center',
    padding: 10,
    color: 'grey',
  },
  select: {
    marginTop: 20,
    flexDirection: 'row',
    marginHorizontal: 30,
    backgroundColor: '#d0d0ff',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'grey',  
  },
  signIn: {
    marginTop: 20,
    alignSelf: 'center',
    color: '#0099ff',
    fontSize: 20,
    marginBottom: 20,
  },
});