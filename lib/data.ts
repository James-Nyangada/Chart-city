export const ASSETS = [
  {
    id: '1',
    title: 'Neon Genesis',
    artist: '@NeonDreamer',
    price: 2.45,
    trend: 'up',
    change24h: '+14.5%',
    image: 'https://picsum.photos/seed/neon1/800/1000',
    continent: 'Asia',
    category: 'Digital Sculpture',
  },
  {
    id: '2',
    title: 'Golden Sands',
    artist: '@DuneMaker',
    price: 1.82,
    trend: 'down',
    change24h: '-3.2%',
    image: 'https://picsum.photos/seed/sand2/800/1000',
    continent: 'Africa',
    category: 'Generative Landscape',
  },
  {
    id: '3',
    title: 'Cyber Alps',
    artist: '@EuroVision',
    price: 5.10,
    trend: 'up',
    change24h: '+22.1%',
    image: 'https://picsum.photos/seed/alps3/800/1000',
    continent: 'Europe',
    category: 'Virtual Architecture',
  },
  {
    id: '4',
    title: 'Liberty Protocol',
    artist: '@StatueTech',
    price: 3.75,
    trend: 'up',
    change24h: '+8.4%',
    image: 'https://picsum.photos/seed/liberty4/800/1000',
    continent: 'N. America',
    category: 'Algorithmic Art',
  },
  {
    id: '5',
    title: 'Amazonia Sync',
    artist: '@JungleNode',
    price: 0.95,
    trend: 'down',
    change24h: '-1.5%',
    image: 'https://picsum.photos/seed/amazon5/800/1000',
    continent: 'S. America',
    category: 'Bio-Digital',
  },
  {
    id: '6',
    title: 'Coral Reef Matrix',
    artist: '@OceanHex',
    price: 1.20,
    trend: 'up',
    change24h: '+5.7%',
    image: 'https://picsum.photos/seed/coral6/800/1000',
    continent: 'Oceania',
    category: 'Fluid Dynamics',
  },
  {
    id: '7',
    title: 'Glacier Core',
    artist: '@IceChain',
    price: 4.30,
    trend: 'up',
    change24h: '+11.2%',
    image: 'https://picsum.photos/seed/ice7/800/1000',
    continent: 'Antarctica',
    category: 'Cryo-Sculpture',
  },
  {
    id: '8',
    title: 'Tokyo Drift',
    artist: '@NeonDreamer',
    price: 3.15,
    trend: 'up',
    change24h: '+18.9%',
    image: 'https://picsum.photos/seed/tokyo8/800/1000',
    continent: 'Asia',
    category: 'Digital Sculpture',
  },
];

export const SECTOR_STATS = {
  marketCap: '45,291.00',
  volume24h: '1,204.50',
  topArchitect: '@NeonDreamer',
};

export const LEADERBOARD = [
  { rank: 1, handle: '@NeonDreamer', role: 'Architect', influence: '24.5%', avatar: 'https://picsum.photos/seed/av1/100/100' },
  { rank: 2, handle: '@WhaleKing', role: 'King', influence: '18.2%', avatar: 'https://picsum.photos/seed/av2/100/100' },
  { rank: 3, handle: '@CyberSamurai', role: 'Architect', influence: '12.8%', avatar: 'https://picsum.photos/seed/av3/100/100' },
  { rank: 4, handle: '@DiamondHands', role: 'King', influence: '9.4%', avatar: 'https://picsum.photos/seed/av4/100/100' },
  { rank: 5, handle: '@PixelLord', role: 'Architect', influence: '7.1%', avatar: 'https://picsum.photos/seed/av5/100/100' },
];

export const TICKER_DATA = [
  "[MINT] @NeonDreamer uploaded 'Cyber Shrine' to ASIA Sector (+ ◎ 0.50)",
  "[TRADE] King '0x4A...9F' acquired 'Graffiti Tower 04' in SOUTH AMERICA (+ ◎ 12.4)",
  "[SHIFT] EUROPE Sector Market Cap increased by 4.2% in the last hour",
  "[MINT] @PixelLord uploaded 'Neon Oasis' to AFRICA Sector (+ ◎ 0.80)",
  "[TRADE] King '0x7B...2C' acquired 'Glacier Core' in ANTARCTICA (+ ◎ 8.1)",
  "[SHIFT] NORTH AMERICA Sector Active Architects reached new ATH",
  "[MINT] @OceanHex uploaded 'Coral Matrix' to OCEANIA Sector (+ ◎ 1.20)",
];

export const LEADERBOARD_DATA = [
  { id: 'asia', rank: 1, name: 'Asia', marketCap: 145200.00, change24h: '+5.2%', trend: 'up', dominance: 32.5 },
  { id: 'europe', rank: 2, name: 'Europe', marketCap: 112450.50, change24h: '+2.1%', trend: 'up', dominance: 25.1 },
  { id: 'namerica', rank: 3, name: 'North America', marketCap: 98700.25, change24h: '-1.4%', trend: 'down', dominance: 22.0 },
  { id: 'africa', rank: 4, name: 'Africa', marketCap: 45120.80, change24h: '+8.7%', trend: 'up', dominance: 10.1 },
  { id: 'samerica', rank: 5, name: 'South America', marketCap: 28400.00, change24h: '+1.2%', trend: 'up', dominance: 6.3 },
  { id: 'oceania', rank: 6, name: 'Oceania', marketCap: 12500.40, change24h: '-0.5%', trend: 'down', dominance: 2.8 },
  { id: 'antarctica', rank: 7, name: 'Antarctica', marketCap: 5300.10, change24h: '+12.4%', trend: 'up', dominance: 1.2 },
];

export const ACTIVITY_FEED = [
  { id: 'evt1', type: 'trade', region: 'Asia', value: '◎ 4.2', time: '12s ago', text: 'Acquisition in Asia' },
  { id: 'evt2', type: 'upload', region: 'Europe', time: '45s ago', text: 'New Art Minted in Europe' },
  { id: 'evt3', type: 'shift', region: 'Global', time: '2m ago', text: 'ALERT: Asia surpasses Europe in 24h Volume!' },
  { id: 'evt4', type: 'trade', region: 'North America', value: '◎ 1.5', time: '5m ago', text: 'Acquisition in North America' },
  { id: 'evt5', type: 'upload', region: 'Africa', time: '12m ago', text: 'New Art Minted in Africa' },
  { id: 'evt6', type: 'trade', region: 'South America', value: '◎ 8.9', time: '18m ago', text: 'Acquisition in South America' },
  { id: 'evt7', type: 'upload', region: 'Oceania', time: '24m ago', text: 'New Art Minted in Oceania' },
  { id: 'evt8', type: 'shift', region: 'Global', time: '1h ago', text: 'ALERT: Antarctica sees 12.4% surge in Market Cap' },
];

export const CONTINENTS_DATA = [
  {
    id: 'africa',
    name: 'AFRICA',
    role: 'CREATORS',
    focus: 'Vision, storytelling, artistic direction.',
    professions: 'Designers, Artists, Storytellers.',
    pm: 'Nyaks',
    cabinet: 'Stan',
    game: 'Roblox',
    discordLink: 'https://discord.gg/MGSQsyJbp'
  },
  {
    id: 'asia',
    name: 'ASIA',
    role: 'BUILDERS',
    focus: 'Systems, tech, logistics.',
    professions: 'Operators, Engineers, Logistics.',
    pm: 'Jamo',
    cabinet: 'Gabu',
    game: 'Minecraft',
    discordLink: 'https://discord.gg/hQqDmaYKWJ'
  },
  {
    id: 'antarctica',
    name: 'ANTARCTICA',
    role: 'CAPITALIZERS',
    focus: 'Research, strategy, scaling.',
    professions: 'Researchers, Analysts, Futurists.',
    pm: 'Franko',
    cabinet: 'Mutua',
    game: '8-ball pool',
    discordLink: 'https://discord.gg/GTFsm69tQ'
  },
  {
    id: 'europe',
    name: 'EUROPE',
    role: 'CONTROLLERS',
    focus: 'Governance, law, accountability.',
    professions: 'Lawyers, Accountants, Politicians, Auditors.',
    pm: 'Jose',
    cabinet: 'Jamal',
    game: 'Chess',
    discordLink: 'https://discord.gg/KtbwyPrhd'
  },
  {
    id: 'namerica',
    name: 'NORTH AMERICA',
    role: 'CONSUMERS',
    focus: 'Data, feedback, optimisation.',
    professions: 'Data scientists, Quality control.',
    pm: 'Lucky',
    cabinet: 'Chris',
    game: 'PUBG',
    discordLink: 'https://discord.gg/ym4XADM6'
  },
  {
    id: 'oceania',
    name: 'OCEANIA',
    role: 'OBSERVERS',
    focus: 'Marketing, visibility, broadcasting.',
    professions: 'Marketers, Broadcasters, Journalists.',
    pm: 'Alex',
    cabinet: 'Sam',
    game: 'Valorant',
    discordLink: 'https://discord.gg/qbsG55Zzw'
  },
  {
    id: 'samerica',
    name: 'SOUTH AMERICA',
    role: 'CONNECTORS',
    focus: 'Community, networking, culture.',
    professions: 'Community Managers, Event Organizers, Ambassadors.',
    pm: 'Diego',
    cabinet: 'Leo',
    game: 'FIFA',
    discordLink: 'https://discord.gg/cSyA3qP2B'
  }
];

export const TRADE_HISTORY = [
  { id: 1, time: '14:23:05', price: '2.45', amount: '1.0', wallet: '0x7A...3f9B', type: 'buy' },
  { id: 2, time: '14:21:12', price: '2.42', amount: '0.5', wallet: '0x2B...8c1A', type: 'buy' },
  { id: 3, time: '14:18:45', price: '2.48', amount: '2.0', wallet: '0x9F...4e2D', type: 'sell' },
  { id: 4, time: '14:15:30', price: '2.41', amount: '0.2', wallet: '0x1C...7b5E', type: 'buy' },
  { id: 5, time: '14:10:05', price: '2.50', amount: '5.0', wallet: '0x5D...1a9F', type: 'sell' },
  { id: 6, time: '14:05:22', price: '2.38', amount: '1.5', wallet: '0x3E...6d4C', type: 'buy' },
  { id: 7, time: '14:01:10', price: '2.35', amount: '0.8', wallet: '0x8A...2f7B', type: 'buy' },
  { id: 8, time: '13:55:40', price: '2.40', amount: '3.0', wallet: '0x4B...9c1E', type: 'sell' },
];
