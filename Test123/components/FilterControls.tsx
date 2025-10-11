import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// 1. Neue Filter-Typen hinzufügen
export type FilterType = 'all' | 'kuehlschrank' | 'gefrierfach' | 'schrank' | 'bad' | 'sonstiges';

type FilterControlsProps = {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

export default function FilterControls({ activeFilter, onFilterChange }: FilterControlsProps) {
  const onSortPress = () => alert('Sortier-Menü wird später implementiert.');

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
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

        <TouchableOpacity
          style={[styles.button, activeFilter === 'schrank' && styles.activeButton]}
          onPress={() => onFilterChange('schrank')}>
          <Text style={[styles.buttonText, activeFilter === 'schrank' && styles.activeButtonText]}>📦 Schrank</Text>
        </TouchableOpacity>
        
        {/* 2. Neue Buttons hier einfügen */}
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
      </ScrollView>

      <TouchableOpacity style={styles.sortButton} onPress={onSortPress}>
        <Text style={styles.buttonText}>⇅ Sortieren</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', paddingLeft: 16, paddingVertical: 10 },
  scrollView: { flex: 1 },
  button: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, backgroundColor: '#f0f0f0', marginRight: 10 },
  activeButton: { backgroundColor: '#3498db' },
  buttonText: { fontSize: 14, fontWeight: '600', color: '#333' },
  activeButtonText: { color: '#fff' },
  sortButton: { paddingVertical: 8, paddingHorizontal: 16 },
});