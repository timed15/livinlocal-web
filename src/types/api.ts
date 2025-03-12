export interface Address {
  uuid: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface User {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_superuser: boolean;
}

export interface EventCategory {
  uuid: string;
  name: string;
  category_image: string;
}

export interface Location {
  uuid: string;
  name: string;
}

export interface Event {
  uuid: string;
  name: string;
  details: string;
  short_blurb: string;
  event_date: string;
  event_start_time: string;
  event_end_time: string;
  image: string;
  link: string;
  is_featured: boolean;
  address: Address;
  categories: EventCategory[];
  locations: Location[];
  created_by: User;
  organizer: User;
}

export interface Partner {
  uuid: string;
  name: string;
  logo: string;
  website: string;
  priority: number;
}