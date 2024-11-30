import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressBar from './ProgressBar';
import { Event } from '../app/types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.eventName}>{event.name}</Text>
      <Text style={styles.eventDetails}>
        {new Date(event.date).toLocaleDateString()} at {event.time}
      </Text>
      <Text style={styles.eventBudget}>Budget: ${event.budget.toFixed(2)}</Text>
      <ProgressBar progress={getProgressPercentage(event.status)} />
      <Text style={styles.eventStatus}>{event.status}</Text>
    </View>
  );
}

function getProgressPercentage(status: string): number {
  switch (status) {
    case 'Initializing':
      return 0.25;
    case 'Pending':
      return 0.5;
    case 'Complete':
      return 1;
    default:
      return 0;
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  eventDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  eventBudget: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  eventStatus: {
    fontSize: 14,
    color: '#007AFF',
    marginTop: 4,
    textAlign: 'right',
  },
});

