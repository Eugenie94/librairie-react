import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export default function Header() {
  const navigation = useNavigation();

  const handleCategoriesNavigation = () => {
    navigation.navigate('Categories');
  };

  const handleBooksNavigation = () => {
    navigation.navigate('Books');
  };

  const handleSearchBooksNavigation = () => {
    navigation.navigate('SearchBooks');
  };

  const handleProfileNavigation = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      {/* Barre de navigation en bas */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={handleCategoriesNavigation}>
          <Icon name="ios-list" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBooksNavigation}>
          <Icon name="ios-book" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSearchBooksNavigation}>
          <Icon name="ios-search" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProfileNavigation}>
          <Icon name="person" size={30} color="black" />
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
    borderTopWidth: 1,
    borderTopColor: '#f5428d',
    position: 'absolute',
    bottom: 0, // Ajuster la valeur du bottom ici pour positionner la barre en bas
    left: 0,
    right: 0,
    paddingBottom: 10,
  },
});