import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CATEGORIES } from '../models/data';
import { LIVRES } from '../models/data';

export default function Categories() {

  const navigation = useNavigation();

  const handleCategoryPress = (categorie) => {
    if (categorie.id === 'c5') {
      // Pour la catégorie "Tous", nous passons tous les livres sans filtre
      navigation.navigate('BooksCategories', { categorieId: 'c5' });
    } else {
      // Pour les autres catégories, nous passons l'ID de la catégorie sélectionnée
      navigation.navigate('BooksCategories', { categorieId: categorie.id });
    }
  };
  

  const renderCategoryButton = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryButton, { backgroundColor: item.couleur }]}
      onPress={() => handleCategoryPress(item)}
    >
      <Text style={styles.categoryText}>{item.genre}</Text>
      <Text style={styles.categoryText}>{item.couleur}</Text>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryButton}
      keyExtractor={(item) => item.id}
    />
  );
}
const styles = StyleSheet.create({
  categoryButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
