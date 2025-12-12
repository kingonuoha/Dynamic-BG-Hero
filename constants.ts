import { Destination, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Holidays', href: '#' },
  { label: 'Destinations', href: '#' },
  { label: 'Flights', href: '#' },
  { label: 'Offers', href: '#' },
  { label: 'Contact', href: '#' },
];

export const DESTINATIONS: Destination[] = [
  {
    id: 1,
    country: "Switzerland",
    continent: "Europe",
    title: "SAINT ANTÖNIEN",
    subtitle: "Swiss Alps",
    description: "Experience the breathtaking beauty of the Swiss Alps. Saint Antönien offers pristine skiing slopes, hiking trails, and authentic alpine culture nestled in the Prättigau valley.",
    imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    country: "Japan",
    continent: "Asia",
    title: "NAGANO PREFECTURE",
    subtitle: "Japan Alps",
    description: "Discover the serenity of the Japanese Alps. Famous for the Jigokudani Monkey Park, hot springs, and historic Zenko-ji Temple, Nagano is a year-round mountain escape.",
    imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    country: "Morocco",
    continent: "Africa",
    title: "MARRAKECH MERZOUGA",
    subtitle: "Sahara Desert",
    description: "Journey into the golden dunes of the Sahara. From the bustling souks of Marrakech to the tranquil starlit nights of Merzouga, experience the magic of Morocco.",
    imageUrl: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    country: "United States",
    continent: "North America",
    title: "YOSEMITE NATIONAL PARK",
    subtitle: "Sierra Nevada",
    description: "Stand in awe of massive granite cliffs and giant sequoias. Yosemite is an icon of America's majestic wilderness, featuring El Capitan and Yosemite Falls.",
    imageUrl: "https://images.unsplash.com/photo-1426604966848-d3ad1f655d65?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    country: "Spain",
    continent: "Europe",
    title: "LOS LANCES BEACH",
    subtitle: "Tarifa",
    description: "The wind capital of Europe. Tarifa's Los Lances beach is a paradise for kitesurfers and nature lovers, located at the southernmost point of the European continent.",
    imageUrl: "https://images.unsplash.com/photo-1563604359-58380d0d826a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 6,
    country: "Turkey",
    continent: "Asia/Europe",
    title: "GÖREME VALLEY",
    subtitle: "Cappadocia",
    description: "Float above fairy chimneys in a hot air balloon. Cappadocia's surreal landscapes and ancient cave dwellings offer a travel experience unlike any other on Earth.",
    imageUrl: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=2070&auto=format&fit=crop"
  }
];