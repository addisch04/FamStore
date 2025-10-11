import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ShoppingListActions() {
  const handleDeleteCompleted = () => {
    // Ein Alert mit Bestätigungs-Dialog
    Alert.alert(
      'Erledigte löschen',
      'Bist du sicher, dass du alle abgehakten Artikel von der Liste entfernen möchtest?',
      [
        // Der "Abbrechen"-Button tut nichts
        {
          text: 'Abbrechen',
          style: 'cancel',
        },
        // Der "Löschen"-Button führt die Aktion aus
        {
          text: 'Löschen',
          style: 'destructive',
          onPress: () => console.log('Erledigte Artikel gelöscht!'), // Später kommt hier die echte Logik hin
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleDeleteCompleted}>
        <Ionicons name="trash-outline" size={18} color="#c0392b" />
        <Text style={styles.buttonText}>Erledigte löschen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    // alignItems: 'flex-end' schiebt den Button an den rechten Rand
    alignItems: 'flex-end',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#fdf2f2', // Ein sehr heller Rotton
    borderWidth: 1,
    borderColor: '#e5a0a0', // Ein sanfter Rotton für den Rand
  },
  buttonText: {
    marginLeft: 8,
    color: '#c0392b', // Ein kräftigerer Rotton für die Schrift
    fontWeight: '600',
    fontSize: 14,
  },
});