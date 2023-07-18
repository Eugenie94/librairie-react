import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CATEGORIES, LIVRES } from '../models/data';
import { Card, Title } from 'react-native-paper';

export default function BooksCategories() {
  const { categorieId } = useRoute().params;

  const filteredBooks = categorieId === 'c5' ? LIVRES : LIVRES.filter((livre) => livre.categorieId.includes(categorieId));

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{CATEGORIES.find((cat) => cat.id === categorieId)?.genre}</Text>
      <FlatList
        data={filteredBooks}
        renderItem={({ item }) => (
          <Card style={[styles.card, styles.bookCard]}>
          <Card.Cover source={{ uri: item.imageUrl }} style={styles.coverImage} />
            <Card.Content>
              <Title style={styles.bookTitle}>{item.titre}</Title>
              <Text style={styles.bookDescription}>{item.description}</Text>
            </Card.Content>
          </Card>
        )}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>Aucun livre trouvé</Text>} // Affiche le message si la liste est vide
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
    marginBottom: 50,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  card: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookCard: {
    borderWidth: 1,
    borderColor: '#A2A2A2',
  },
  coverImage: {
    height: 150, 
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  titre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    marginBottom: 6, 
    color: '#666',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bookDescription: {
    fontSize: 16,
    color: '#666',
  },
});
