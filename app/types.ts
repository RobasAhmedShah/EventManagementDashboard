// Event status types
export type EventStatus = 'Initializing' | 'Pending' | 'Complete';

// Service type for predefined event planning services
export interface Service {
  id: string;
  name: string;
  description: string;
  cost: number;
}

// Helper type
export interface Helper {
  id: string;
  name: string;
  role: string;
  contact: string;
  availability: boolean;
}

// Event type
export interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  budget: number;
  status: EventStatus;
  description?: string;
  location?: string;
  services: string[]; // Array of service IDs
  helpers: string[]; // Array of helper IDs
}

// User type (for future authentication implementation)
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// Navigation params for type-safe navigation
export type RootStackParamList = {
  Home: undefined;
  Events: undefined;
  Helpers: undefined;
  Dashboard: undefined;
  EventDetails: { eventId: string };
  AddEvent: undefined;
  EditEvent: { eventId: string };
  Services: undefined;
  Settings: undefined;
};

