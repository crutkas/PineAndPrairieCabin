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
      { label: 'Open-plan great room', icon: 'house' },
      { label: 'Seating for eight', icon: 'chairs' },
      { label: 'Pack-and-play / high chair available on request', icon: 'chairs' },
    ],
  },
  {
    title: 'Outdoors',
    items: [
      { label: 'Private hot tub', icon: 'tub', standout: true },
      { label: 'Wraparound deck', icon: 'deck' },
      { label: 'BBQ grill', icon: 'grill' },
      { label: 'Mountain views', icon: 'mountain' },
      { label: 'Bear-proof trash bins', icon: 'house' },
    ],
  },
  {
    title: 'Tech & Comfort',
    items: [
      { label: 'High-speed WiFi · 4K ready', icon: 'wifi', standout: true },
      { label: 'Smart TVs in each main room', icon: 'tv' },
      { label: 'Smart thermostat', icon: 'thermostat' },
      { label: 'In-unit washer/dryer', icon: 'laundry' },
    ],
  },
  {
    title: 'Resort Access',
    items: [
      { label: 'Swim & Fitness Center', icon: 'wave' },
      { label: 'Two championship golf courses', icon: 'golf' },
      { label: 'Glade Spring Spa discounts', icon: 'star' },
      { label: 'Nelson Farm activities', icon: 'barn' },
    ],
  },
];
