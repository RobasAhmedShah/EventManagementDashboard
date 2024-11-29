import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Link } from 'expo-router';

const sampleEvents = [
  { id: '1', name: 'Conference', date: '2023-08-15' },
  { id: '2', name: 'Wedding', date: '2023-09-01' },
  { id: '3', name: 'Birthday Party', date: '2023-08-22' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Management Dashboard</Text>
      <Text style={styles.subtitle}>Upcoming Events:</Text>
      <FlatList
        data={sampleEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text style={styles.eventName}>{item.name}</Text>
            <Text style={styles.eventDate}>{item.date}</Text>
          </View>
        )}
      />
      <Link href="/events" style={styles.link}>View All Events</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    color: '#666',
  },
  link: {
    color: 'blue',
    marginTop: 20,
    textAlign: 'center',
  },
});