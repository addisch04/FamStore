import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type PantryItemProps = {
  name: string;
  quantity: string;
  expiryInfo: string;
  expiryColor?: string;
};

export default function PantryItemRow({
  name,
  quantity,
  expiryInfo,
  expiryColor = '#666',
}: PantryItemProps) {
  return (
    <TouchableOpacity style={styles.tile}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>🥛</Text>
      </View>
      <Text style={styles.name} numberOfLines={2}>{name}</Text>
      <Text style={styles.quantity}>{quantity}</Text>
      <Text style={[styles.expiryInfo, { color: expiryColor }]}>{expiryInfo}</Text>
      <TouchableOpacity style={styles.menuButton} onPress={() => {}}>
        <Ionicons name="ellipsis-horizontal" size={22} color="#888" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: { marginBottom: 8 },
  icon: { fontSize: 32 },
  name: { fontSize: 14, fontWeight: '600', textAlign: 'center', minHeight: 34 },
  quantity: { fontSize: 13, color: '#888', marginTop: 2 },
  expiryInfo: { fontSize: 12, marginTop: 4 },
  menuButton: { position: 'absolute', top: 0, right: 0, padding: 6 },
});
