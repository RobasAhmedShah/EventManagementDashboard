import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useEvents } from './EventContext';
import EventCard from '../components/EventCard';
import ProgressBar from '../components/ProgressBar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { events } = useEvents();
  const userName = "John"; // This would typically come from user authentication

  const totalEvents = events.length;
  const eventsInProgress = events.filter(event => event.status === 'Pending').length;
  const completedEvents = events.filter(event => event.status === 'Complete').length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.welcomeMessage}>Welcome back, {userName}!</Text>
        
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Event Summary</Text>
          <View style={styles.summaryRow}>
            <SummaryItem title="Total Events" count={totalEvents} icon="calendar-outline" />
            <SummaryItem title="In Progress" count={eventsInProgress} icon="hourglass-outline" />
            <SummaryItem title="Completed" count={completedEvents} icon="checkmark-circle-outline" />
          </View>
        </View>

        <TouchableOpacity style={styles.createEventButton}>
          <Ionicons name="add-circle-outline" size={24} color="white" />
          <Text style={styles.createEventButtonText}>Create New Event</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Ongoing Events</Text>
        {events.slice(0, 3).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}

        <View style={styles.helperSection}>
          <Text style={styles.sectionTitle}>Helper Management</Text>
          <Text style={styles.helperSummary}>{events.reduce((total, event) => total + event.helpers.length, 0)} helpers involved in events</Text>
          <TouchableOpacity style={styles.manageHelpersButton}>
            <Text style={styles.manageHelpersButtonText}>Manage Helpers</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quickLinksContainer}>
          <QuickLinkButton title="Services Menu" icon="list-outline" href="/services" />
          <QuickLinkButton title="All Events" icon="calendar-outline" href="/events" />
          <QuickLinkButton title="Settings" icon="settings-outline" href="/settings" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SummaryItem({ title, count, icon }: { title: string; count: number; icon: string }) {
  return (
    <View style={styles.summaryItem}>
      <Ionicons name={icon as any} size={24} color="#007AFF" />
      <Text style={styles.summaryItemCount}>{count}</Text>
      <Text style={styles.summaryItemTitle}>{title}</Text>
    </View>
  );
}

function QuickLinkButton({ title, icon, href }: { title: string; icon: string; href: string }) {
  return (
    <Link href={href as any} asChild>
      <TouchableOpacity style={styles.quickLinkButton}>
        <Ionicons name={icon as any} size={24} color="#007AFF" />
        <Text style={styles.quickLinkButtonText}>{title}</Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F5',
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
    color: '#333',
  },
  summaryContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryItemCount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#007AFF',
  },
  summaryItemTitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  createEventButton: {
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    margin: 16,
  },
  createEventButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
    marginBottom: 8,
    color: '#333',
  },
  helperSection: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  helperSummary: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  manageHelpersButton: {
    backgroundColor: '#F0F0F5',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  manageHelpersButtonText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  quickLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  quickLinkButton: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickLinkButtonText: {
    color: '#007AFF',
    marginTop: 4,
    fontSize: 12,
  },
});

