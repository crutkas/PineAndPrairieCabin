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
  neighborhood: 'Cabins at the Farm',
  address: '50 Harmony',
} as const;

/**
 * Specs sourced from the Suncadia listing for unit 133889 ("50 Harmony").
 * Verified against the listing detail screenshot. Owner: spot-check before launch.
 */
export const specs = {
  bedrooms: 3,
  bathrooms: 3.5,
  sleeps: 11,
  squareFeet: 2469,
  neighborhood: 'Cabins at the Farm',
  view: 'Valley View',
  petPolicy: 'No pets · Service animals only per ADA',
  parkingSpots: 'Self-parking · Accessible parking on site',
  // Distinguishing on-property features called out in the Suncadia listing.
  standoutFeatures: [
    'Mother-in-Law suite above garage with kitchenette and bunk room',
    'Heated garage game room (XL Jenga, skee-ball, foosball, Pac-Man)',
    'Private hot tub on covered patio',
    'Gas fireplace in main living area',
  ],
} as const;
