export interface Bedroom {
  name: string;
  bed: string;
  notes?: string;
  beds: string;
  features: string;
  image: string;
}

// Sourced from the Suncadia listing for unit 133889 ("50 Harmony").
// The listing separates the three main-house bedrooms from the self-contained
// Mother-in-Law suite above the garage — we keep that distinction here.
export const bedrooms: Bedroom[] = [
  {
    name: 'Primary Suite',
    bed: 'King · Main floor',
    notes: 'En-suite bathroom with walk-in shower. Meadow view.',
    beds: 'King · Main floor',
    features: 'En-suite bathroom with walk-in shower. Meadow view.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=85&auto=format&fit=crop',
  },
  {
    name: 'Bedroom Two',
    bed: 'Queen · Upstairs',
    notes: 'Shared Jack-and-Jill bath with combination tub/shower.',
    beds: 'Queen · Upstairs',
    features: 'Shared Jack-and-Jill bath with combination tub/shower.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=85&auto=format&fit=crop',
  },
  {
    name: 'Bedroom Three',
    bed: 'King · Upstairs',
    notes: 'Shared Jack-and-Jill bath with combination tub/shower.',
    beds: 'King · Upstairs',
    features: 'Shared Jack-and-Jill bath with combination tub/shower.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=85&auto=format&fit=crop',
  },
];

export const motherInLawSuite: Bedroom = {
  name: 'Mother-in-Law Suite',
  bed: 'Above the garage · Sleeps five',
  notes: 'Two twin-over-full bunk beds and a full sleeper sofa, plus a private bathroom, a kitchenette with dining for four, and its own TV lounge. Cheerful kid-themed décor — the place children claim as their own from the moment they arrive.',
  beds: 'Two twin-over-full bunks + full sleeper sofa',
  features: 'Private bath, kitchenette with dining for four, TV lounge.',
  image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&q=85&auto=format&fit=crop',
};
