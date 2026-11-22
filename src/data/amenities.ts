export interface AmenityItem {
  label: string;
  icon: string;
  standout?: boolean;
}

export interface AmenityCategory {
  title: string;
  items: AmenityItem[];
}

export const amenities: AmenityCategory[] = [
  {
    title: 'Living & Kitchen',
    items: [
      { label: 'Gas fireplace', icon: 'flame', standout: true },
      { label: 'Full kitchen with dishwasher', icon: 'pot' },
      { label: 'Dining for seven plus two bar stools', icon: 'chairs' },
      { label: 'In-home coffee bar', icon: 'pot' },
      { label: 'Open-plan great room', icon: 'house' },
    ],
  },
  {
    title: 'For the Family',
    items: [
      { label: 'Mother-in-Law suite with kitchenette and bunk room', icon: 'house', standout: true },
      { label: 'Heated garage game room — XL Jenga, skee-ball, foosball, Pac-Man', icon: 'star', standout: true },
      { label: 'Family-friendly · pet-free home', icon: 'chairs' },
      { label: 'Lawn and board games available', icon: 'star' },
    ],
  },
  {
    title: 'Outdoors',
    items: [
      { label: 'Private hot tub on covered patio', icon: 'tub', standout: true },
      { label: 'Covered, furnished outdoor patio', icon: 'deck' },
      { label: 'Meadow and valley views', icon: 'mountain' },
      { label: 'BBQ grill', icon: 'grill' },
    ],
  },
  {
    title: 'Tech & Comfort',
    items: [
      { label: 'High-speed WiFi · 4K ready', icon: 'wifi', standout: true },
      { label: 'Smart TVs in each main room', icon: 'tv' },
      { label: 'Air conditioning and heat', icon: 'thermostat' },
      { label: 'In-unit washer/dryer', icon: 'laundry' },
      { label: 'Self-parking · accessible parking on site', icon: 'house' },
    ],
  },
  {
    title: 'Resort Access',
    items: [
      { label: 'Swim & Fitness Center', icon: 'wave' },
      { label: 'Two championship golf courses · guaranteed advance tee times', icon: 'golf' },
      { label: 'Glade Spring Spa discounts', icon: 'star' },
      { label: 'Nelson Farm activities', icon: 'barn' },
      { label: 'Intra-resort shuttle service', icon: 'house' },
    ],
  },
];
