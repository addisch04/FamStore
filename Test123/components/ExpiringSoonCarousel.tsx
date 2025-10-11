import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';
import { ThemedText } from './themed-text';

// Later, this data will come from your app's state.
// We're using placeholder images from a free service.
const dummyData = [
  { id: '1', name: 'Bio-Milch', expiryInfo: 'Läuft in 2 Tg ab', imageUri: 'https://picsum.photos/seed/milk/200' },
  { id: '2', name: 'Gouda-Käse', expiryInfo: 'Läuft in 4 Tg ab', imageUri: 'https://picsum.photos/seed/cheese/200' },
  { id: '3', name: 'Frische Äpfel', expiryInfo: 'Läuft in 6 Tg ab', imageUri: 'https://picsum.photos/seed/apples/200' },
  { id: '4', name: 'Naturjoghurt', expiryInfo: 'Läuft morgen ab', imageUri: 'https://picsum.photos/seed/yoghurt/200' },
];

export default function ExpiringSoonCarousel() {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>Bald ablaufend</ThemedText>
      <ScrollView
        horizontal // This makes the ScrollView horizontal
        showsHorizontalScrollIndicator={false} // Hides the scrollbar for a cleaner look
        contentContainerStyle={styles.scrollViewContent}
      >
        {dummyData.map(item => (
          <ProductCard
            key={item.id}
            name={item.name}
            expiryInfo={item.expiryInfo}
            imageUri={item.imageUri}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18, // Space above the section
  },
  title: {
    marginBottom: 15,
    marginLeft: 5, // Align with the start of the cards
  },
  scrollViewContent: {
    paddingLeft: 5, // Ensure the first card has the same alignment
    paddingRight: 10, // Ensure the last card's shadow is visible
  },
});