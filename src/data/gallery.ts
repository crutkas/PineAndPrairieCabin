export interface Photo {
  src: string;
  alt: string;
  caption?: string;
  span: 'g1' | 'g2' | 'g3' | 'g4' | 'g5' | 'g6';
}

/**
 * PLACEHOLDER PHOTOS — Unsplash, cabin/lodge themed.
 * Replace with photography from the Suncadia listing or pro shoot.
 *
 * When real photos arrive:
 *   1. Drop them into src/assets/images/
 *   2. Import them at the top of this file: import hero from '../assets/images/hero.jpg';
 *   3. Swap `src: 'https://...'` for `src: hero.src` and Astro will optimize at build.
 */
export const gallery: Photo[] = [
  {
    src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=85&auto=format&fit=crop',
    alt: 'Cabin exterior at dusk',
    caption: 'Exterior at Dusk',
    span: 'g1',
  },
  {
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=85&auto=format&fit=crop',
    alt: 'Primary suite',
    caption: 'Primary Suite',
    span: 'g2',
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85&auto=format&fit=crop',
    alt: 'Great room with fireplace',
    caption: 'Great Room',
    span: 'g3',
  },
  {
    src: 'https://images.unsplash.com/photo-1556909195-4e5e7b2e3e5d?w=1200&q=85&auto=format&fit=crop',
    alt: 'Kitchen',
    caption: 'Kitchen',
    span: 'g4',
  },
  {
    src: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=1200&q=85&auto=format&fit=crop',
    alt: 'Hot tub at night',
    caption: 'Hot Tub at Dusk',
    span: 'g5',
  },
  {
    src: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&q=85&auto=format&fit=crop',
    alt: 'Deck view',
    caption: 'The Deck',
    span: 'g6',
  },
];

export const heroImage = 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=2200&q=85&auto=format&fit=crop';
export const storyImage = 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1400&q=85&auto=format&fit=crop';
export const quoteImageBand = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=2200&q=85&auto=format&fit=crop';
export const areaImageBand = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2200&q=85&auto=format&fit=crop';
