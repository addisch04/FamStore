import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from './themed-text';
import RecipeCard from './RecipeCard';

// Mehr Daten, um das 2x2 Grid zu füllen
const dummyRecipes = [
  { id: '1', title: 'Pasta mit Tomatensoße', subtitle: 'Verwendet 5 deiner Zutaten', imageUri: 'https://picsum.photos/seed/pasta/200' },
  { id: '2', title: 'Hähnchenpfanne mit Gemüse', subtitle: 'Verwendet 4 deiner Zutaten', imageUri: 'https://picsum.photos/seed/chicken/200' },
  { id: '3', title: 'Schneller Linseneintopf', subtitle: 'Verwendet 7 deiner Zutaten', imageUri: 'https://picsum.photos/seed/lentils/200' },
  { id: '4', title: 'Ofenkartoffeln mit Quark', subtitle: 'Verwendet 3 deiner Zutaten', imageUri: 'https://picsum.photos/seed/potatoes/200' },
];

export default function RecipeSuggestions() {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>Rezeptvorschläge</ThemedText>
      <View style={styles.gridContainer}>
        {dummyRecipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            subtitle={recipe.subtitle}
            imageUri={recipe.imageUri}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 16,
    marginBottom: 40,
  },
  title: {
    marginBottom: 15,
  },
  // Der neue Container für unser Grid
  gridContainer: {
    flexDirection: 'row', // Ordnet Elemente horizontal an
    flexWrap: 'wrap', // Erlaubt den Elementen, in die nächste Zeile umzubrechen
    justifyContent: 'space-between', // Verteilt den Platz zwischen den Karten
    rowGap: 15, // Fügt einen vertikalen Abstand zwischen den Zeilen hinzu
  },
});