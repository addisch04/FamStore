import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons'; // <-- Ionicons importieren
import { PantryItem } from '@/services/api';

interface PantryItemRowProps {
  item: PantryItem;
  onDelete: () => void;
}

export default function PantryItemRow({ item, onDelete }: PantryItemRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.info}>
        <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
        <ThemedText style={styles.subtext}>
          {item.quantity} • {item.category}
        </ThemedText>
      </View>
      
      <TouchableOpacity onPress={onDelete} style={styles.deleteBtn}>
        {/* Universelles Mülleimer-Icon */}
        <Ionicons name="trash" size={24} color="#FF3B30" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  info: {
    flex: 1,
  },
  subtext: {
    fontSize: 12,
    opacity: 0.6,
  },
  deleteBtn: {
    padding: 8,
  }
});