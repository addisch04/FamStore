// components/DashboardOverview.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import DashboardCard from '@/components/DashboardCard';

export default function DashboardOverview() {
  // Später kommen diese Daten aus dem App-Zustand, jetzt sind sie fest einprogrammiert.
  return (
    <View style={styles.container}>
      <DashboardCard icon="😋" value={48} label="Vorräte gesamt" />
      <DashboardCard icon="🕒" value={5} label="Bald ablaufend" />
      <DashboardCard icon="🛒" value={3} label="Wenig da" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Ordnet die Karten nebeneinander an
    justifyContent: 'space-around', // Verteilt den Platz zwischen den Karten
    paddingHorizontal: 10,
    marginTop: 12, // Abstand nach oben
  },
});