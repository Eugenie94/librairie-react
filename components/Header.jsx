import React from 'react';
import { View, Image, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

function BooksScreen() {
  const navigation = useNavigation();

  const handleBooksNavigation = () => {
    navigation.navigate('Books'); 
  };

  return (
    <View style={styles.tabContent}>
      <TouchableOpacity onPress={handleBooksNavigation}>
        <Text>Books Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function CategoriesScreen() {
  const navigation = useNavigation();

  const handleCategoriesNavigation = () => {
    navigation.navigate('Categories');
  };

  return (
    <View style={styles.tabContent}>
      <TouchableOpacity onPress={handleCategoriesNavigation}>
        <Text>Categories Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function SearchScreen() {
  const navigation = useNavigation();

  const handleSearchNavigation = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.tabContent}>
      <TouchableOpacity onPress={handleSearchNavigation}>
        <Text>Search Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function FavoritesScreen() {
  const navigation = useNavigation();

  const handleFavoritesNavigation = () => {
    navigation.navigate('FavoritesScreen');
  };

  return (
    <View style={styles.tabContent}>
      <TouchableOpacity onPress={handleFavoritesNavigation}>
        <Text>Favorites Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Header() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#f5428d" />
      <Image source={require('../assets/image.jpg')} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>GilbertJeune</Text>
      </View>

      {/* Barre de navigation en bas */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => console.log('Clic sur Catégorie')}>
          <Icon name="ios-list" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Clic sur Livre')}>
          <Icon name="ios-book" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Clic sur Recherche')}>
          <Icon name="ios-search" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Clic sur Cœur')}>
          <Icon name="ios-heart" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
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
  tabBar: {
    backgroundColor: '#f5428d',
  },
  tabLabel: {
    color: 'white',
    fontSize: 16,
  },
  tabIndicator: {
    backgroundColor: 'white',
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#f5428d',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
