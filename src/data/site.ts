/**
 * PLACEHOLDER specs — verify with owner before launch.
 * These values came from agent best-guess for a 2,400 sq ft Suncadia cabin.
 * Owner: edit and remove the PLACEHOLDER comment when confirmed.
 */
/**
 * Single source of truth for site-wide constants.
 * Owner: update phone, email, address as needed.
 */
export const site = {
  name: 'Pine & Prairie Cabin',
  nameShort: 'Pine & Prairie',
  url: 'https://pineandprairiecabin.com',
  tagline: 'A Scandinavian-modern retreat ninety minutes east of Seattle — where the forest meets the meadow.',
  shortDescription: 'Private cabin inside Suncadia Resort, Cle Elum, Washington.',
  location: 'Suncadia Resort · Cle Elum, Washington',
  email: 'hello@pineandprairiecabin.com',
  // The Suncadia listing for unit 133889 — primary booking destination.
  bookingUrl: 'https://suncadia.com/stay/accommodations/vacation-rentals/vacation-rental-search/?unitID=133889',
  bookingPhone: '(509) 260-4225',
  bookingPhoneTel: '+15092604225',
  // The Suncadia neighborhood the cabin is most likely in (per research).
  // Owner: confirm or correct.
  neighborhood: 'Cabins at the Farm',
} as const;

export const specs = {
  bedrooms: 3,
  bathrooms: 2.5,
  sleeps: 8,
  squareFeet: 2400,
  acres: 0.25,
  neighborhood: 'Cabins at the Farm',
  yearBuilt: 2019,
  petPolicy: 'Dog-friendly · 2 dog max · $75/dog cleaning fee',
  parkingSpots: 3,
  // Average nightly range for stats bar / SEO context only — never displayed without owner approval
  priceRangeHint: '$425–$675/night seasonal',
} as const;
