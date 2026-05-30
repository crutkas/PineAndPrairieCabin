export interface Bedroom {
  name: string;
  bed: string;
  notes?: string;
  beds: string;
  features: string;
  image: string;
}

// PLACEHOLDER configuration — owner to confirm.
// TODO: render beds/features in Bedrooms.astro after the parallel component pass; bed/notes mirror them for now.
export const bedrooms: Bedroom[] = [
  {
    name: 'Primary Suite',
    bed: 'King · sleeps 2',
    notes: 'En-suite bath with soaking tub. Wood-burning stove. Forest view.',
    beds: 'King · sleeps 2',
    features: 'En-suite bath with soaking tub. Wood-burning stove. Forest view.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=85&auto=format&fit=crop',
  },
  {
    name: 'Bedroom Two',
    bed: 'Queen · sleeps 2',
    notes: 'Shared bath. Garden view. Loft sleeper sofa nearby brings total capacity to eight.',
    beds: 'Queen · sleeps 2',
    features: 'Shared bath. Garden view. Loft sleeper sofa nearby brings total capacity to eight.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=85&auto=format&fit=crop',
  },
  {
    name: 'Bedroom Three',
    bed: 'Two twins, convertible to king · sleeps 2',
    notes: 'Shared bath. Flexible twin setup for kids or couples. Loft sleeper sofa nearby brings total capacity to eight.',
    beds: 'Two twins, convertible to king · sleeps 2',
    features: 'Shared bath. Flexible twin setup for kids or couples. Loft sleeper sofa nearby brings total capacity to eight.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=85&auto=format&fit=crop',
  },
];
