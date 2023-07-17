import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CATEGORIES, LIVRES } from '../models/data';

export default function BooksCategories() {
  const { categorieId } = useRoute().params;

  if (categorieId === undefined) {
    return (
      <View>
        <Text>Error: Catégorie non spécifiée</Text>
      </View>
    );
  }
  const filteredBooks = categorieId === 'c5' ? LIVRES : LIVRES.filter((livre) => livre.categorieId.includes(categorieId));
  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{CATEGORIES.genre}</Text>
      <FlatList
        data={filteredBooks}
        renderItem={({ item }) => (
          <View style={styles.bookContainer}>
            <Text style={styles.bookTitle}>{item.titre}</Text>
            {/* Vous pouvez afficher d'autres détails du livre ici */}
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#ccc',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
