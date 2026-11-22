export interface ResortCard {
  title: string;
  description: string;
  url: string;
}

/**
 * Curated overview of Suncadia Resort amenities — links deep into suncadia.com.
 * URLs verified during research; update if Suncadia restructures their site.
 */
export const resortFeatures: ResortCard[] = [
  {
    title: 'Swim & Fitness Center',
    description: 'Indoor and outdoor pools, hot tubs, waterslides, sauna, steam room, and a full workout facility. Included with the resort fee.',
    url: 'https://suncadia.com/play/swim-fitness/',
  },
  {
    title: 'Prospector & Rope Rider Golf',
    description: 'Two public championship courses set in the eastern Cascades — Arnold Palmer and Jacobsen Hardy designs.',
    url: 'https://suncadia.com/play/golf/',
  },
  {
    title: 'Glade Spring Spa',
    description: 'Recently refreshed indoor-outdoor spa with hot springs pools, massage, and skincare set against garden and forest views.',
    url: 'https://suncadia.com/relax/glade-spring-spa/',
  },
  {
    title: 'Nelson Farm',
    description: 'Axe throwing, a pump track, playground, and an outdoor concert lawn. The cabin sits just at the meadow line.',
    url: 'https://suncadia.com/play/nelson-farm/',
  },
  {
    title: 'On-Property Dining',
    description: 'Stovehouse, Swiftwater Cellars winery, and Suncadia Lodge — a short drive without leaving the resort.',
    url: 'https://suncadia.com/eat/',
  },
  {
    title: 'Resort Shuttle',
    description: 'On-demand shuttle service between cabin clusters, the Lodge, golf, dining, and the Swim & Fitness Center.',
    url: 'https://suncadia.com/stay/resort-services/',
  },
];
