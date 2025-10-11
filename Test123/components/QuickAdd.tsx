import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ThemedText } from './themed-text';
import { Ionicons } from '@expo/vector-icons';

export default function QuickAdd() {
  const onScanPress = () => Alert.alert('Kassenbon scannen', 'Diese Funktion wird später implementiert.');
  const onManualPress = () => Alert.alert('Manuell hinzufügen', 'Diese Funktion wird später implementiert.');

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>Schnell hinzufügen</ThemedText>
      <View style={styles.cardContainer}>
        {/* Kassenbon-Button im Karten-Stil */}
        <TouchableOpacity style={styles.cardButton} onPress={onScanPress}>
          <Ionicons name="camera-outline" size={32} color="#333" />
          <Text style={styles.cardText}>Kassenbon scannen</Text>
        </TouchableOpacity>

        {/* Manueller Button im Karten-Stil */}
        <TouchableOpacity style={styles.cardButton} onPress={onManualPress}>
          <Ionicons name="create-outline" size={32} color="#333" />
          <Text style={styles.cardText}>Manuell hinzufügen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  // Der neue Stil für unsere kartenartigen Buttons
  cardButton: {
    flex: 1, // Teilt den Platz gleichmäßig auf
    backgroundColor: '#fff', // Heller Hintergrund wie bei den Dashboard-Karten
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center', // Zentriert Icon und Text horizontal
    justifyContent: 'center',
    gap: 6, // Abstand zwischen Icon und Text
    // Schatten von der DashboardCard übernommen
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