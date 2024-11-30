import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Event, Helper } from './types';

interface EventContextType {
  events: Event[];
  addEvent: (event: Event) => void;
  removeEvent: (id: string) => void;
  helpers: Helper[];
  addHelper: (helper: Helper) => void;
  removeHelper: (id: string) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<Event[]>([]);
  const [helpers, setHelpers] = useState<Helper[]>([]);

  const addEvent = (event: Event) => {
    setEvents([...events, event]);
  };

  const removeEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const addHelper = (helper: Helper) => {
    setHelpers([...helpers, helper]);
  };

  const removeHelper = (id: string) => {
    setHelpers(helpers.filter(helper => helper.id !== id));
  };

  return (
    <EventContext.Provider value={{ events, addEvent, removeEvent, helpers, addHelper, removeHelper }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
}

