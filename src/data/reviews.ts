export interface Review {
  text: string;
  attribution: string;
}

/**
 * Real reviews go here, pulled from Suncadia / Airbnb / VRBO.
 * Until then the Reviews section on the marketing page shows a CTA pointing
 * to the actual Suncadia listing's review stream.
 *
 * Format when you add them:
 *   { text: '...', attribution: 'FirstName · Month Year · Source' }
 */
export const reviews: Review[] = [];
