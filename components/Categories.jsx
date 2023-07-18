import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CATEGORIES, LIVRES } from '../models/data';

export default function Categories() {
  const navigation = useNavigation();
  const [titreCategorie, setTitreCategorie] = useState('');
  const [couleurCategorie, setCouleurCategorie] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Fonction pour ajouter une nouvelle catégorie
  const handleAddCategorie = () => {
    const newCategorie = {
      // Générer un ID unique pour la nouvelle catégorie
      id: `c${CATEGORIES.length + 1}`,
      genre: titreCategorie,
      couleur: couleurCategorie,
    };

// Ajouter la nouvelle catégorie à la liste existante des catégories
CATEGORIES.push(newCategorie);

    // Effacer les champs de saisie après l'ajout de la catégorie
    setTitreCategorie('');
    setCouleurCategorie('');
  };

  const handleCategoryPress = (categorie) => {
    navigation.navigate('BooksCategories', { categorieId: categorie.id });
  };

  // Fonction pour diviser le tableau des catégories en chunks de taille 2 pour l'affichage en grille
  const splitIntoChunks = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

   // Fonction pour afficher le bouton de catégorie
   const renderCategoryButton = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryButton, { backgroundColor: item.couleur }]}
      onPress={() => handleCategoryPress(item)}
    >
      <Text style={styles.categoryText}>{item.genre}</Text>
    </TouchableOpacity>
  );

  // Diviser les catégories en chunks de taille 2 pour l'affichage en grille
  const categoriesChunks = splitIntoChunks(CATEGORIES, 2);

  return (
    <View style={styles.container}>
      {/* Afficher le formulaire d'ajout de catégorie */}
      <View style={styles.formContainer}>
      {!isFormVisible && (
          <Button title="Ajouter une catégorie" onPress={() => setIsFormVisible(true)} />
        )}
        {isFormVisible && (
          <>
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
            <View style={styles.buttonMargin}>
              <Button title="Réduire le formulaire" onPress={() => setIsFormVisible(false)} />
            </View>
          </>
        )}
      </View>

 {/* Afficher les catégories sous forme de grille */}
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
  buttonMargin: {
    marginVertical: 10,
  },
});
