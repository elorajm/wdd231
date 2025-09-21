const park = {
  id: "F58C6D24-8D10-4573-9826-65D42B8B83AD",
  url: "https://www.nps.gov/yell/index.htm",
  fullName: "Yellowstone National Park",
  parkCode: "yell",
  description:
    "On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal wonders. Today, millions of people come here each year to camp, hike, and enjoy the majesty of the park.",
  states: "ID,MT,WY",
  images: [
    {
      url: "https://www.nps.gov/common/uploads/structured_data/3C7D5920-1DD8-B71B-0B83F012ED802CEA.jpg",
      altText: "Brilliant blues and greens of a hot spring ringed by oranges, yellows, reds, and browns."
    }
  ],
  name: "Yellowstone",
  designation: "National Park"
};

export function getParkData() {
  return park;
}
