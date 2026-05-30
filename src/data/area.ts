export interface AreaItem {
  name: string;
  distance: string;
  description: string;
  url?: string;
}

export interface Season {
  name: string;
  items: AreaItem[];
}

export const seasons: Season[] = [
  {
    name: 'Summer',
    items: [
      { name: 'Championship golf', distance: 'on property', description: 'Prospector and Rope Rider — locals rate from $79.' },
      { name: 'Cascade hiking', distance: '5–30 min', description: 'Iron Horse, Coal Mines, Sasse Mountain trail systems.' },
      { name: 'Lake Cle Elum', distance: '15 min', description: 'Paddleboarding, fishing, swimming in the high desert lake.' },
      { name: 'Suncadia Adventure Park', distance: 'on property', description: 'Zip line, climbing wall, ropes course.' },
    ],
  },
  {
    name: 'Fall',
    items: [
      { name: 'Foliage drives', distance: 'around the resort', description: 'Aspen and larch through the Cle Elum River valley.' },
      { name: 'Wine harvest', distance: '15–60 min', description: 'Swiftwater Cellars on-resort plus Yakima Valley to the east.' },
      { name: 'Nelson Farm Harvest Festival', distance: 'on property', description: 'Pumpkin patch, hayrides, evening concerts.' },
    ],
  },
  {
    name: 'Winter',
    items: [
      { name: 'Snoqualmie Pass skiing', distance: '45 min', description: 'Four-area pass: Summit Central, East, West, and Alpental.' },
      { name: 'Cross-country & snowshoe', distance: 'on property', description: 'Groomed trails right outside the door.' },
      { name: 'Hot tub in the snow', distance: '20 feet', description: 'Honestly the best argument for booking in February.' },
    ],
  },
  {
    name: 'Spring',
    items: [
      { name: 'Wildflower hikes', distance: '5–30 min', description: 'Balsamroot and lupine across the eastern slopes.' },
      { name: 'Fly fishing', distance: '10–30 min', description: 'Cle Elum River and tributaries — guides available.' },
      { name: 'Roslyn', distance: '5 min', description: 'Northern Exposure town — coffee, antiques, restaurants.' },
    ],
  },
];

export const nearbyTowns: AreaItem[] = [
  { name: 'Roslyn', distance: '5 min', description: 'Historic mining town and Northern Exposure filming location.' },
  { name: 'Cle Elum', distance: '10 min', description: 'Groceries (Safeway), local restaurants, hardware, gas.' },
  { name: 'Leavenworth', distance: '1 hr', description: 'Bavarian-style village — great day trip.' },
  { name: 'Seattle', distance: '90 min', description: 'I-90 east, just past Snoqualmie Pass.' },
];
