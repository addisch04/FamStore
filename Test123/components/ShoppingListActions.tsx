import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ShoppingListActions() {
  const handleFinishShopping = () => {
    Alert.alert('Einkauf abschließen', 'Hier wird später die Kamera geöffnet, um den Kassenbon zu scannen und die Artikel zum Vorrat hinzuzufügen.');
  };

  const handleShareList = () => {
    Alert.alert('Liste teilen', 'Hier wird später die Teilen-Funktion des Handys aufgerufen.');
  };

  const handleSaveTemplate = () => {
    Alert.alert('Als Vorlage speichern', 'Hier wird später die aktuelle Liste als Vorlage gesichert.');
  };

  const handleDeleteCompleted = () => {
    Alert.alert(
      'Erledigte löschen',
      'Bist du sicher, dass du alle abgehakten Artikel entfernen möchtest?',
      [
        { text: 'Abbrechen', style: 'cancel' },
        { text: 'Löschen', style: 'destructive', onPress: () => console.log('Erledigte gelöscht!') },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* --- ERSTE REIHE --- */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.cardButton} onPress={handleFinishShopping}>
          <Ionicons name="receipt-outline" size={28} color="#333" />
          <Text style={styles.cardText}>Einkauf abschließen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={handleShareList}>
          <Ionicons name="share-social-outline" size={28} color="#333" />
          <Text style={styles.cardText}>Liste teilen</Text>
        </TouchableOpacity>
      </View>

      {/* --- ZWEITE REIHE --- */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.cardButton} onPress={handleSaveTemplate}>
          <Ionicons name="save-outline" size={28} color="#333" />
          <Text style={styles.cardText}>Als Vorlage speichern</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cardButton, styles.deleteButton]} onPress={handleDeleteCompleted}>
          <Ionicons name="trash-outline" size={28} color="#c0392b" />
          <Text style={[styles.cardText, styles.deleteButtonText]}>Erledigte löschen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 8,
    gap: 15, // Vertikaler Abstand zwischen den Reihen
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 15, // Horizontaler Abstand zwischen den Buttons
  },
  cardButton: {
    flex: 1, // Stellt sicher, dass die Buttons den Platz gleichmäßig aufteilen
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: '#fdf2f2',
    borderColor: '#e5a0a0',
    borderWidth: 1,
  },
  deleteButtonText: {
    color: '#c0392b',
  },
});