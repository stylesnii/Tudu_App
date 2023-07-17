import { ScrollView,StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Card1 = ({imageSource, title,minititle }) => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
        <ScrollView>
          {/* <Image source={imageSource} style={styles.image}/> */}
          <Image source={{uri:'https://media.istockphoto.com/id/95756763/photo/african-colored-pattern-fabric-background.jpg?b=1&s=612x612&w=0&k=20&c=5Ks_pmV1VcKfvcZoqC7n-E-SgK47SyTvHhuXk0p48sU='}} style={styles.image}/>
          <View style={styles.contents}>
          <View style={styles.opacity}></View>
            {/* <Text style={styles.title}>{title}</Text>
            <Text style={styles.minititle}>{minititle}</Text> */}
            <Text style={styles.title}>Afrocentric</Text>
            <Text style={styles.minititle}>Shop African products including fabrics, men's wear, women's wear and Jewellery making</Text>
          </View>
          <View style={styles.icon}>
            <Ionicons name="chevron-back" marginLeft={-30} size={30} color="#fff" onPress={handleBackPress}/>
            <Ionicons name="heart" right={-90} marginLeft={10} size={30} color="#fff"/>
            <Ionicons name="cart" right={-30} marginLeft={10} size={30} color="#fff"/>
          </View>
          <Text style={styles.text}>Categories</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.categories} onPress={() => navigation.navigate('Bags')}>
              <Image source={{uri:'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=400'}} style={styles.catImages}/>
              <View style={styles.catOpacity}>
                <Text style={styles.textOpacity}>Bags & Luggage</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categories} onPress={() => navigation.navigate('Womencloth')}>
              <Image source={{uri:'https://images.pexels.com/photos/14864365/pexels-photo-14864365.jpeg?auto=compress&cs=tinysrgb&w=400'}} style={styles.catImages}/>
              <View style={styles.catOpacity}>
                <Text style={styles.textOpacity}>Women Clothings</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categories} onPress={() => navigation.navigate('Smartphones')}>
              <Image source={require('../../assets/icon.png')} style={styles.catImages}/>
              <View style={styles.catOpacity}>
                <Text style={styles.textOpacity}>Bags & Luggage</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <Text style={styles.text}>Best Selling by Categories</Text>
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    tabBarVisible: false,
    hideNavigation: "none",
  },
  opacity:{
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 150,
    width: "100%",
    alignSelf: 'flex-end',
    bottom: 0,
  },
  image:{
    width: "100%",
    height: 450,
  },
  icon:{
    position: 'absolute',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    padding: 5,
    left: 0,
    right: 0,
  },
  contents:{
    flexDirection: 'row',
    width: "100%",
    height: 450,
    position: 'absolute',
  },
  title:{
      alignSelf: 'flex-end',
      bottom: 80,
      color: '#fff',
      left: 20,
      fontSize: 30,
  },
  minititle:{
    fontSize: 15,
    alignSelf: 'flex-end',
    right: 135,
    width: "90%",
    bottom: 30,
    color: '#fff',
    fontWeight: 500,
  },
  text:{
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
    fontWeight: 600,
    color: '#4f4f4f',
  },
  categories:{
    height: 140,
    width: 120,
    marginHorizontal: 20,
    marginTop: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  catImages:{
    height: 140,
    width: 120,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  catOpacity:{
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 60,
    width: "100%",
    alignSelf: 'flex-end',
    bottom: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  textOpacity:{
    fontSize: 18,
    marginLeft: 7,
    color: '#fff',
  },
});