import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CATEGORIES } from '../models/data';

export default function Categories() {
  const navigation = useNavigation();
  const [titreCategorie, setTitreCategorie] = useState('');
  const [couleurCategorie, setCouleurCategorie] = useState('');

  const handleAddCategorie = () => {
    // Create a new category object with the entered values
    const newCategorie = {
      id: `c${CATEGORIES.length + 1}`, // Generate a unique ID for the new category
      genre: titreCategorie,
      couleur: couleurCategorie,
    };

    // Add the new category to the existing list of categories
    CATEGORIES.push(newCategorie);

    // Clear the input fields after adding the category
    setTitreCategorie('');
    setCouleurCategorie('');
  };

  const handleCategoryPress = (categorie) => {
    if (categorie.id === 'c5') {
      navigation.navigate('BooksCategories', { categorieId: 'c5' });
    } else {
      navigation.navigate('BooksCategories', { categorieId: categorie.id });
    }
  };

  // Function to split the categories array into chunks of size 2
  const splitIntoChunks = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const renderCategoryButton = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryButton, { backgroundColor: item.couleur }]}
      onPress={() => handleCategoryPress(item)}
    >
      <Text style={styles.categoryText}>{item.genre}</Text>
    </TouchableOpacity>
  );

  const categoriesChunks = splitIntoChunks(CATEGORIES, 2);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Ajouter une catégorie :</Text>
        <TextInput
          style={styles.input}
          value={titreCategorie}
          onChangeText={setTitreCategorie}
          placeholder="Titre de la catégorie"
        />
        <TextInput
          style={styles.input}
          value={couleurCategorie}
          onChangeText={setCouleurCategorie}
          placeholder="Couleur de la catégorie"
        />
        <Button title="Ajouter" onPress={handleAddCategorie} />
      </View>

      {categoriesChunks.map((chunk, index) => (
        <View key={index} style={styles.categoryRow}>
          {chunk.map((category) => (
            <View key={category.id} style={styles.categoryItem}>
              {renderCategoryButton({ item: category })}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  formContainer: {
    marginBottom: 40,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  categoryItem: {
    flex: 1,
  },
  categoryButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
