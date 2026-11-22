export interface Photo {
  src: string;
  alt: string;
  caption?: string;
  span: 'g1' | 'g2' | 'g3' | 'g4' | 'g5' | 'g6';
}

/**
 * Real photography from the Suncadia listing for unit 133889 ("50 Harmony").
 * Files live in /public/images/cabin/ so they're served as-is.
 * Owner: replace any of these with a pro-shot version by dropping the same
 * filename into /public/images/cabin/ (or update the path here).
 */
const IMG = '/images/cabin';

export const gallery: Photo[] = [
  {
    src: `${IMG}/50harmony-040.jpg`,
    alt: 'Daytime exterior — terracotta wood siding, double garage, pines',
    caption: 'The Cabin',
    span: 'g1',
  },
  {
    src: `${IMG}/50harmony-013.jpg`,
    alt: 'Great room with vaulted ceiling, fireplace, and dining table',
    caption: 'Great Room',
    span: 'g2',
  },
  {
    src: `${IMG}/50harmony-024.jpg`,
    alt: 'Heated garage game room with skee-ball, Pac-Man, foosball, XL Jenga',
    caption: 'Game Room',
    span: 'g3',
  },
  {
    src: `${IMG}/50harmony-005.jpg`,
    alt: 'Open kitchen and living area with floor-to-ceiling glass',
    caption: 'Kitchen & Living',
    span: 'g4',
  },
  {
    src: `${IMG}/50harmony-025.jpg`,
    alt: 'Mother-in-Law suite above the garage with bunk beds and kitchenette',
    caption: 'Mother-in-Law Suite',
    span: 'g5',
  },
  {
    src: `${IMG}/50harmony-045.jpg`,
    alt: 'Cabin exterior at night under a starry sky',
    caption: 'Under the Stars',
    span: 'g6',
  },
];

export const heroImage = `${IMG}/50harmony-046.jpg`;
export const storyImage = `${IMG}/50harmony-009.jpg`;
export const quoteImageBand = `${IMG}/50harmony-042.jpg`;
export const areaImageBand = `${IMG}/50harmony-039.jpg`;
