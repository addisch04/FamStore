import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export type FilterType = 'all' | 'kuehlschrank' | 'gefrierfach' | 'schrank' | 'bad' | 'sonstiges';

type FilterControlsProps = {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

export default function FilterControls({ activeFilter, onFilterChange }: FilterControlsProps) {
  const onSortPress = () => alert('Sortier-Menü wird später implementiert.');

  return (
    <View style={styles.container}>
      {/* --- ERSTE REIHE --- */}
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, activeFilter === 'all' && styles.activeButton]}
          onPress={() => onFilterChange('all')}>
          <Text style={[styles.buttonText, activeFilter === 'all' && styles.activeButtonText]}>Alle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeFilter === 'kuehlschrank' && styles.activeButton]}
          onPress={() => onFilterChange('kuehlschrank')}>
          <Text style={[styles.buttonText, activeFilter === 'kuehlschrank' && styles.activeButtonText]}>🧊 Kühlschrank</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeFilter === 'gefrierfach' && styles.activeButton]}
          onPress={() => onFilterChange('gefrierfach')}>
          <Text style={[styles.buttonText, activeFilter === 'gefrierfach' && styles.activeButtonText]}>❄️ Gefrierfach</Text>
        </TouchableOpacity>
      </View>

      {/* --- ZWEITE REIHE --- */}
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, activeFilter === 'schrank' && styles.activeButton]}
          onPress={() => onFilterChange('schrank')}>
          <Text style={[styles.buttonText, activeFilter === 'schrank' && styles.activeButtonText]}>📦 Schrank</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeFilter === 'bad' && styles.activeButton]}
          onPress={() => onFilterChange('bad')}>
          <Text style={[styles.buttonText, activeFilter === 'bad' && styles.activeButtonText]}>🛀 Bad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeFilter === 'sonstiges' && styles.activeButton]}
          onPress={() => onFilterChange('sonstiges')}>
          <Text style={[styles.buttonText, activeFilter === 'sonstiges' && styles.activeButtonText]}>🧺 Sonstiges</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onSortPress}>
          <Text style={styles.buttonText}>⇅ Sortieren</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 10, // Vertikaler Abstand zwischen den Reihen
  },
  row: {
    flexDirection: 'row',
    gap: 10, // Horizontaler Abstand zwischen den Buttons
  },
  button: {
    flex: 1, // 👈 Das ist die wichtigste Änderung!
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center', // Zentriert den Text im Button
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#3498db',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  activeButtonText: {
    color: '#fff',
  },
});