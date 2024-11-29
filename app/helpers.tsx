import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HelpersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Helpers Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});