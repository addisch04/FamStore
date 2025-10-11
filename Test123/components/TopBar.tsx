import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function TopBar() {
  return (
    <View style={styles.container}>
      {/* HIER den Text mit der Link-Komponente umwickeln */}
      <Link href="/home">
        <Text style={styles.logo}>FamStore</Text>
      </Link>
      
      <View style={styles.iconsContainer}>
        <Ionicons name="search" size={24} color="black" style={styles.icon} />
        
        <Link href="/profile">
          <Ionicons name="person-circle-outline" size={30} color="black" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
});