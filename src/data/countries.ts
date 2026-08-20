export interface Country {
  id: string;
  name: string;
  rank: number;
  developers: string;
  hubs: string;
  color: string;
  path: string;
}

export const COUNTRIES: Country[] = [
  {
    id: "us",
    name: "États-Unis",
    rank: 1,
    developers: "4,4 M",
    hubs: "Silicon Valley, NYC, Seattle",
    color: "#6d28d9",
    path: "M130,180 L170,170 L200,175 L230,170 L260,180 L270,200 L260,220 L230,230 L200,225 L170,220 L140,210 Z",
  },
  {
    id: "in",
    name: "Inde",
    rank: 2,
    developers: "5,2 M",
    hubs: "Bangalore, Hyderabad, Pune",
    color: "#7c3aed",
    path: "M370,210 L390,200 L410,210 L405,230 L395,250 L380,255 L365,240 L360,220 Z",
  },
  {
    id: "cn",
    name: "Chine",
    rank: 3,
    developers: "7,2 M",
    hubs: "Beijing, Shenzhen, Shanghai",
    color: "#8b5cf6",
    path: "M400,170 L430,160 L460,165 L475,180 L470,200 L450,210 L430,205 L410,200 L395,190 Z",
  },
  {
    id: "de",
    name: "Allemagne",
    rank: 4,
    developers: "900 K",
    hubs: "Berlin, Munich, Hamburg",
    color: "#9b8fd4",
    path: "M290,140 L310,135 L320,145 L315,165 L300,170 L285,160 Z",
  },
  {
    id: "gb",
    name: "Royaume-Uni",
    rank: 5,
    developers: "850 K",
    hubs: "Londres, Manchester, Cambridge",
    color: "#a78bfa",
    path: "M270,130 L280,125 L285,135 L280,150 L270,148 Z",
  },
  {
    id: "fr",
    name: "France",
    rank: 6,
    developers: "600 K",
    hubs: "Paris, Lyon, Toulouse",
    color: "#b4a8e6",
    path: "M275,155 L295,150 L300,165 L290,175 L275,170 Z",
  },
  {
    id: "br",
    name: "Brésil",
    rank: 7,
    developers: "1,8 M",
    hubs: "São Paulo, Rio, Florianópolis",
    color: "#c4b5f5",
    path: "M190,280 L220,260 L240,275 L235,310 L215,330 L195,320 Z",
  },
  {
    id: "jp",
    name: "Japon",
    rank: 8,
    developers: "1,1 M",
    hubs: "Tokyo, Osaka, Kyoto",
    color: "#a78bfa",
    path: "M480,175 L490,165 L495,180 L490,200 L480,195 Z",
  },
  {
    id: "ca",
    name: "Canada",
    rank: 9,
    developers: "400 K",
    hubs: "Toronto, Vancouver, Montréal",
    color: "#b4a8e6",
    path: "M120,130 L200,120 L240,130 L250,155 L200,165 L140,160 Z",
  },
  {
    id: "au",
    name: "Australie",
    rank: 10,
    developers: "300 K",
    hubs: "Sydney, Melbourne, Brisbane",
    color: "#c4b5f5",
    path: "M440,310 L480,300 L500,315 L495,340 L470,350 L445,340 Z",
  },
  {
    id: "kr",
    name: "Corée du Sud",
    rank: 11,
    developers: "500 K",
    hubs: "Séoul, Busan, Daegu",
    color: "#b4a8e6",
    path: "M468,180 L475,175 L478,188 L472,195 L465,190 Z",
  },
  {
    id: "sg",
    name: "Singapour",
    rank: 12,
    developers: "200 K",
    hubs: "Singapore Hub",
    color: "#c4b5f5",
    path: "M428,252 L434,248 L437,256 L431,260 Z",
  },
  {
    id: "nl",
    name: "Pays-Bas",
    rank: 13,
    developers: "350 K",
    hubs: "Amsterdam, Rotterdam",
    color: "#c4b5f5",
    path: "M285,132 L295,128 L298,140 L288,142 Z",
  },
  {
    id: "il",
    name: "Israël",
    rank: 14,
    developers: "300 K",
    hubs: "Tel Aviv, Herzliya",
    color: "#c4b5f5",
    path: "M335,200 L342,195 L345,208 L338,212 Z",
  },
  {
    id: "se",
    name: "Suède",
    rank: 15,
    developers: "250 K",
    hubs: "Stockholm, Göteborg",
    color: "#c4b5f5",
    path: "M300,100 L310,95 L315,110 L305,118 L298,112 Z",
  },
];

export function getIntensity(rank: number): number {
  if (rank <= 3) return 1;
  if (rank <= 6) return 0.75;
  if (rank <= 10) return 0.5;
  return 0.3;
}
