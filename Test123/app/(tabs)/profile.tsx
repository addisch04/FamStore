import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// WICHTIG: Benenne die Funktion passend zum Dateinamen um!
// Für pantry.tsx -> export default function PantryScreen()
// Für shoppinglist.tsx -> export default function ShoppingListScreen()
// usw.
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Dieser Screen ist in Arbeit und wird bald mit Inhalt gefüllt.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
  },
});