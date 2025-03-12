import { apiClient } from './client';
import type { Event, EventCategory, Location, Partner, User } from '@/types/api';

export const eventService = {
  getEvents: async (location: string, category?: string) => {
    const response = await apiClient.get<Event[]>('/livin/1/events', {
      params: { location, category },
    });
    return response.data;
  },

  getEventCategories: async () => {
    const response = await apiClient.get<EventCategory[]>('/livin/1/event_categories');
    return response.data;
  },
};

export const locationService = {
  getLocations: async () => {
    const response = await apiClient.get<Location[]>('/livin/1/locations');
    return response.data;
  },
};

export const partnerService = {
  getPartners: async () => {
    const response = await apiClient.get<Partner[]>('/livin/1/partners');
    return response.data;
  },
};

export const userService = {
  getUsers: async (email: string) => {
    const response = await apiClient.get<User[]>('/django/4.2/users', {
      params: { email },
    });
    return response.data;
  },
};