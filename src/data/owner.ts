// PLACEHOLDER vignette — agent-written scaffolding. Owner: edit firstName + body + photo.
export const owner = {
  firstName: 'The Owner',
  greeting: 'From Our Family to Yours',
  body: [
    'We first saw the cabin on a cold morning when the meadow was still tucked under fog. We stood on the deck with borrowed mugs of coffee and watched an elk move through the treeline like it owned the place. By the time the sun reached the grass, we were already making excuses for why this was not a sensible decision and why we were going to do it anyway.',
    'Most weekends here look pretty simple for us. The kids disappear upstairs with books and board games, friends linger too long at the kitchen island, and someone always ends up in the garage with a foosball match that goes on longer than it should. In summer we eat dinner outside until the light finally drops behind the pines; in winter the whole house seems to gather around the fireplace without anyone needing to call people in.',
    'We cannot be here as often as the cabin deserves, so we decided to share it with people who would notice the same small things we do: the quiet after snow, the meadow changing color by the hour, the short drive into Roslyn when nobody feels like cooking, the way everyone sleeps a little harder after a day outside.',
    'A small honest detail: the deck creaks when the wind comes up, and the upstairs loft is always the warmest room on a cold night. We have come to think of both as part of the place. We hope you do, too.',
  ],
  signature: 'With warmth,',
  // Optional photo (square crop, ~600x600). Set to null until owner provides one.
  photo: null as string | null,
} as const;
