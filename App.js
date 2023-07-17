import React from 'react';
import { View, Image, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import Categories from './components/Categories';
import Books from './components/Books';
import BooksCategories from './components/BooksCategories';
import SearchBooks from './components/SearchBooks';
import Profile from './components/Profile';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

      {/* Image de l'application */}
      <StatusBar barStyle="light-content" backgroundColor="#f5428d" />
      <Image source={require('./assets/image.jpg')} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>GilbertJeune</Text>
      </View>

      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Books" component={Books} />
          <Stack.Screen name="BooksCategories" component={BooksCategories} />
          <Stack.Screen name="SearchBooks" component={SearchBooks} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
        <Header title="Mon Header" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
