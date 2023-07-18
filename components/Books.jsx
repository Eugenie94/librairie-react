import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { CATEGORIES, LIVRES } from '../models/data';

export default function Books() {
  const [titreLivre, setTitreLivre] = useState('Le parfum de Suskind');
  const [descriptionLivre, setDescriptionLivre] = useState("Le Parfum, c'est l'histoire abominable et drolatique de Grenouille. Un homme marqué par la mort dès sa naissance, à l'odorat hors du commun et au destin brisé. Le Parfum, sous-titré Histoire d'un meurtrier est un roman historique de Patrick Süskind publié en 1985.");
  const [categorieId, setCategorieId] = useState('');
  const [tomes, setTomes] = useState('2');
  const [imageUrl, setImageUrl] = useState('https://cdn1.booknode.com/book_cover/0/le_parfum-122-264-432.jpg');
  const [isFormExpanded, setIsFormExpanded] = useState(false);

  // Fonction pour ajouter un nouveau livre
  const handleAddLivre = () => {
    const newLivre = {
      id: LIVRES.length + 1,
      titre: titreLivre,
      description: descriptionLivre,
      categorieId: categorieId,
      tomes: tomes || 1,
      imageUrl: imageUrl,
    };
    setIsFormExpanded(false);

    LIVRES.push(newLivre);

    // Effacer les champs de saisie après l'ajout du livre
    setTitreLivre('');
    setDescriptionLivre('');
    setCategorieId('');
    setImageUrl('');
    setTomes('');
    setIsFormExpanded(false);
  };

  // Fonction pour afficher un livre dans la liste
  const renderLivre = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8}>
      <Card style={[styles.card, styles.bookCard]}>
        <Card.Cover source={{ uri: item.imageUrl }} style={styles.coverImage} />
        <Card.Content>
          <Text style={styles.titre}>{item.titre}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {item.description}
          </Text>
          <Text style={styles.tomes}>Tomes: {item.tomes}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Formulaire pour ajouter un livre */}
      <View style={styles.formContainer}>
        {isFormExpanded && (
          <>
            <TextInput
              style={styles.input}
              value={titreLivre}
              onChangeText={setTitreLivre}
              placeholder="Titre du livre"
            />
            <TextInput
              style={[styles.input, styles.multilineInput]}
              value={descriptionLivre}
              onChangeText={setDescriptionLivre}
              placeholder="Description du livre"
              multiline
              numberOfLines={4}
            />
            <TextInput
              style={styles.input}
              value={categorieId}
              onChangeText={setCategorieId}
              placeholder="Catégorie du livre"
            />
            <TextInput
              style={styles.input}
              value={imageUrl}
              onChangeText={setImageUrl}
              placeholder="URL de l'image du livre"
            />
            <TextInput
              style={styles.input}
              value={tomes}
              onChangeText={setTomes}
              placeholder="Tome du livre"
            />
            <TouchableOpacity style={[styles.addButton, styles.reduceFormButton]} onPress={handleAddLivre}>
              <Text style={styles.addButtonText}>Ajouter</Text>
            </TouchableOpacity>
            <View style={styles.buttonMargin}>
              <TouchableOpacity
                style={[styles.addButton, styles.addButtonTextStyle, styles.reduceFormButton]}
                onPress={() => setIsFormExpanded(false)}
              >
                <Text style={styles.addButtonText}>Réduire le formulaire</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        {!isFormExpanded && (
          <View style={styles.addButtonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={() => setIsFormExpanded(true)}>
              <Text style={styles.addButtonText}>Ajouter un livre</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Liste de livres */}
      <View style={styles.listContainer}>
        <FlatList
          data={LIVRES}
          renderItem={renderLivre}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  formContainer: {
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  flatListContent: {
    paddingBottom: 20,
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
  tomes: {
    fontSize: 14,
    color: '#666',
  },
  buttonMargin: {
    marginVertical: 10,
  },
  addButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: '#fff',
    borderColor: '#f5428d',
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: 'center',
    minWidth: '70%',
  },
  addButtonText: {
    color: '#f5428d',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center', 
  },
  reduceFormButton: {
    backgroundColor: '#fff',
    borderColor: '#f5428d',
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: 'center',
    minWidth: '70%',
  },
  addButtonTextStyle: {
    color: '#f5428d',
    alignSelf: 'center',
    textAlign: 'center', 
  },
});

