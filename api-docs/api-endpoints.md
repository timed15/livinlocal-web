# LivinLocal API Documentation

## Base URL
```
https://livin.idea42.dev/api
```

## API Version: 1.0.0
Contact: Livin Local Team (paul@idea42.com)

## Authentication
The API uses Bearer token authentication (opaque token) for protected endpoints.
```http
Authorization: Bearer <token>
```

## Endpoints

### Events
#### Get All Events
- **Endpoint**: `/livin/1/events`
- **Method**: GET
- **Parameters**:
  - `location` (required): The location of the event
  - `category` (optional): The category of the event
- **Security**: No authentication required
- **Response**: Array of Event objects

#### Get Event Categories
- **Endpoint**: `/livin/1/event_categories`
- **Method**: GET
- **Security**: No authentication required
- **Response**: Array of EventCategory objects

### Locations
#### Get All Locations
- **Endpoint**: `/livin/1/locations`
- **Method**: GET
- **Security**: No authentication required
- **Response**: Array of Location objects

### Partners
#### Get All Partners
- **Endpoint**: `/livin/1/partners`
- **Method**: GET
- **Security**: No authentication required
- **Response**: Array of Partner objects

### Users
#### Get Users
- **Endpoint**: `/django/4.2/users`
- **Method**: GET
- **Parameters**:
  - `email` (required): The user's email address
- **Security**: Requires authentication
- **Response**: Array of User objects

## Data Models

### Event
\`\`\`typescript
interface Event {
  uuid: string;
  name: string;
  details: string;
  short_blurb: string;
  event_date: string; // format: date
  event_start_time: string; // format: date-time
  event_end_time: string; // format: date-time
  image: string;
  link: string;
  is_featured: boolean;
  address: Address;
  categories: EventCategory[];
  locations: Location[];
  created_by: User;
  organizer: User;
}
\`\`\`

### EventCategory
\`\`\`typescript
interface EventCategory {
  uuid: string;
  name: string;
  category_image: string;
}
\`\`\`

### Location
\`\`\`typescript
interface Location {
  uuid: string;
  name: string;
}
\`\`\`

### Partner
\`\`\`typescript
interface Partner {
  uuid: string;
  name: string;
  logo: string;
  website: string;
  priority: number;
}
\`\`\`

### User
\`\`\`typescript
interface User {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_superuser: boolean;
}
\`\`\`

### Address
\`\`\`typescript
interface Address {
  uuid: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
\`\`\`