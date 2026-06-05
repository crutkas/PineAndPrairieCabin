export interface Review {
  text: string;
  attribution: string;
}

/**
 * PLACEHOLDER reviews — written by agent in owner's voice as scaffolding.
 * Owner: replace with real reviews from Suncadia / Airbnb / VRBO before launch.
 * Keep first name + month + year + source for credibility.
 */
export const reviews: Review[] = [
  {
    text: 'The best mornings of our year were on that deck. Fog burning off the meadow, coffee, no one else around.',
    attribution: 'Sarah · July 2024 · Suncadia direct',
  },
  {
    text: 'We came for a long weekend before the snow flew and ended up stretching it to a week. The fireplace, the hike down toward the river, dinner at Swiftwater — every day felt earned. The cabin sleeps eleven comfortably but still feels intimate enough for two.',
    attribution: 'Marcus & Jenna · October 2024 · Airbnb',
  },
  {
    text: 'Six adults and three kids, ages five to twelve. We were nervous about whether the place could absorb us — it absorbed us. The kitchen handled three home-cooked dinners in a row, the upstairs loft turned into a kid fort, and the heated garage with the skee-ball machine turned out to be the single best decision of the trip. Snoqualmie was a real 45 minutes, longer when the flakes got heavy, but the resort cross-country trails were honestly better for the under-tens. By the last night, everyone had a routine: boots by the fireplace, cocoa at the island, kids asleep before dessert.',
    attribution: 'Priya & the Patel Family · February 2025 · VRBO',
  },
  {
    text: 'Quiet in the way you can only get east of the mountains. We barely left the property except for one slow afternoon in Roslyn. The owner texted check-in instructions an hour before we arrived and that was the last thing we needed — every detail had already been thought through.',
    attribution: 'Eli · April 2025 · Airbnb',
  },
  {
    text: 'Three of us played both courses in three days, walked to the village for dinner twice, then slept like the dead with the windows cracked.',
    attribution: 'Kevin · August 2024 · Suncadia direct',
  },
];
