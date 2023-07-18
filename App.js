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
      <StatusBar barStyle="light-content" backgroundColor="#f5428d" />
      <View style={styles.container}>
        {/* Image et titre */}
        <View style={styles.imageContainer}>
          <Image source={require('./assets/image.jpg')} style={styles.image} />
        </View>

        {/* Contenu de la navigation */}
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f5428d',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{ headerTitle: 'Categories' }}
          />
          <Stack.Screen
            name="Books"
            component={Books}
            options={{ headerTitle: 'Books' }}
          />
          <Stack.Screen
            name="BooksCategories"
            component={BooksCategories}
            options={{ headerTitle: 'Books Categories' }}
          />
          <Stack.Screen
            name="SearchBooks"
            component={SearchBooks}
            options={{ headerTitle: 'Search Books' }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerTitle: 'Profile' }}
          />
        </Stack.Navigator>

        {/* Composant Header */}
        <Header />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 170,
  },
});
