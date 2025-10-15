import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type ShoppingListItemProps = {
  name: string;
  note?: string;
  isChecked: boolean;
  onToggle: () => void;
};

export default function ShoppingListItem({ name, note, isChecked, onToggle }: ShoppingListItemProps) {
  const onMenuPress = () => alert(`Menü für ${name}`);

  return (
    <TouchableOpacity
      style={styles.tile}
      onPress={onToggle}
      onLongPress={onMenuPress}
      delayLongPress={200}
    >
      {isChecked && <View style={styles.overlay} />}
      
      {/* Der TouchableOpacity Block für den Menü-Button (drei Punkte) wurde hier entfernt */}
      
      <Text style={[styles.name, isChecked && styles.checkedText]} numberOfLines={2}>{name}</Text>
      {note && <Text style={[styles.note, isChecked && styles.checkedText]} numberOfLines={1}>{note}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: '22%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    aspectRatio: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(236, 240, 241, 0.7)',
    borderRadius: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 6,
  },
  note: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
    marginTop: 2,
  },
  checkedText: {
    textDecorationLine: 'line-through',
    color: '#95a5a6',
  },
});