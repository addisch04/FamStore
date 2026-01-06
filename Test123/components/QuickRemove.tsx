import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons';

export default function QuickRemove() {
  const onRecipePress = () => Alert.alert('Rezept kochen', 'Diese Funktion wird später implementiert.');
  const onPhotoPress = () => Alert.alert('Foto-Entfernung', 'Diese Funktion wird später implementiert.');
  const onManualPress = () => Alert.alert('Manuell entfernen', 'Diese Funktion wird später implementiert.');

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>Schnell entfernen</ThemedText>
      <View style={styles.cardContainer}>
        {/* Rezept-Button */}
        <TouchableOpacity style={styles.cardButton} onPress={onRecipePress}>
          <Ionicons name="restaurant-outline" size={32} color="#333" />
          <Text style={styles.cardText}>Rezept kochen</Text>
        </TouchableOpacity>

        {/* Foto-Button */}
        <TouchableOpacity style={styles.cardButton} onPress={onPhotoPress}>
          <Ionicons name="image-outline" size={32} color="#333" />
          <Text style={styles.cardText}>Foto</Text>
        </TouchableOpacity>

        {/* Manueller Button */}
        <TouchableOpacity style={styles.cardButton} onPress={onManualPress}>
          <Ionicons name="trash-bin-outline" size={32} color="#333" />
          <Text style={styles.cardText}>Manuell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Hinweis: Diese Styles sind bewusst fast identisch zu denen in QuickAdd.tsx
// für ein einheitliches Design.
const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    paddingHorizontal: 16,
  },
  title: {
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  cardButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});