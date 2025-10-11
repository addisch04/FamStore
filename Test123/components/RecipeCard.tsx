import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

type RecipeCardProps = {
  imageUri: string;
  title: string;
  subtitle: string;
};

export default function RecipeCard({ imageUri, title, subtitle }: RecipeCardProps) {
  const handlePress = () => Alert.alert('Rezept ansehen', `Zeige Details für: ${title}`);

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.subtitle} numberOfLines={2}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%', // Jede Karte nimmt ca. 48% der Breite ein, um Platz für einen Abstand zu lassen
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden', // Stellt sicher, dass das Bild die abgerundeten Ecken nicht überlappt
    // Schatten
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 110, // Feste Höhe für das Bild
  },
  textContainer: {
    padding: 10,
    minHeight: 80, // Gibt dem Textbereich eine Mindesthöhe für einheitliches Aussehen
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
});