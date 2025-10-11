import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AddItemInput from '@/components/AddItemInput';
import ShoppingListActions from '@/components/ShoppingListActions'; // 1. Neue Komponente importieren
import { ThemedText } from '@/components/themed-text';

export default function ShoppingListScreen() {
  return (
    <ScrollView style={styles.container}>
      <AddItemInput />
      <ShoppingListActions /> {/* 2. Platzhalter ersetzen */}

      {/* Platzhalter für die zukünftige Einkaufsliste */}
      <View style={styles.placeholderContainer}>
        <ThemedText>[Die gruppierte Liste kommt hier hin]</ThemedText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholderContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});