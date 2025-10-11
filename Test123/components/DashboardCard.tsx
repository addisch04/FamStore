// components/DashboardCard.tsx

import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

// Wir definieren, welche Daten (Props) diese Komponente erwartet.
type DashboardCardProps = {
  icon: string;
  value: number | string;
  label: string;
};

export default function DashboardCard({ icon, value, label }: DashboardCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1, // Sorgt dafür, dass die Karten den Platz gleichmäßig aufteilen
    marginHorizontal: 4, // Kleiner Abstand zwischen den Karten
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: Platform.OS === 'android' ? '#f3f3f3' : '#FFFFFF',
    // Leichter Schatten für iOS & Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  icon: {
    fontSize: 30, // Emojis sind Text, also können wir die Schriftgröße anpassen
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
  },
  label: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
    textAlign: 'center',
  },
});