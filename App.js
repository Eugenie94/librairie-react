import React from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import Categories from './components/Categories';
import Books from './components/Books';
import BooksCategories from './components/BooksCategories';
import SearchBooks from './components/SearchBooks';
import Profile from './components/Profile';

export default function App() {
  // Créez un navigateur Stack pour gérer la navigation de l'application
  const Stack = createNativeStackNavigator();

  return (
    // Le NavigationContainer enveloppe l'application entière et fournit la fonctionnalité de navigation
    <NavigationContainer>
      {/* StatusBar pour définir le style de la barre d'état */}
      <StatusBar barStyle="light-content" backgroundColor="#f5428d" />
      <View style={styles.container}>
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image source={require('./assets/image.jpg')} style={styles.image} />
        </View>

        {/* Pile de navigation */}
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f5428d',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        >
          {/* Écran pour le composant Categories */}
          <Stack.Screen name="Categories" component={Categories} options={{ headerTitle: 'Catégories' }} />

          {/* Écran pour le composant Books */}
          <Stack.Screen name="Books" component={Books} options={{ headerTitle: 'Livres' }} />

          {/* Écran pour le composant BooksCategories */}
          <Stack.Screen name="BooksCategories" component={BooksCategories} options={{ headerTitle: 'Livres filtrés' }} />

          {/* Écran pour le composant SearchBooks */}
          <Stack.Screen name="SearchBooks" component={SearchBooks} options={{ headerTitle: 'Recherchez un livre' }} />

          {/* Écran pour le composant Profile */}
          <Stack.Screen name="Profile" component={Profile} options={{ headerTitle: 'Votre profil' }} />
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
