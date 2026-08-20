"use client";

import { useState, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface CountryData {
  id: string;
  name: string;
  rank: number;
  developers: string;
  hubs: string;
  color: string;
  coordinates: [number, number];
}

const COUNTRIES: CountryData[] = [
  { id: "840", name: "États-Unis", rank: 1, developers: "4,4 M", hubs: "Silicon Valley, NYC, Seattle", color: "#7c3aed", coordinates: [-98, 39] },
  { id: "356", name: "Inde", rank: 2, developers: "5,2 M", hubs: "Bangalore, Hyderabad, Pune", color: "#8b5cf6", coordinates: [78, 22] },
  { id: "156", name: "Chine", rank: 3, developers: "7,2 M", hubs: "Beijing, Shenzhen, Shanghai", color: "#6d28d9", coordinates: [104, 35] },
  { id: "276", name: "Allemagne", rank: 4, developers: "900 K", hubs: "Berlin, Munich, Hamburg", color: "#9b8fd4", coordinates: [10, 51] },
  { id: "826", name: "Royaume-Uni", rank: 5, developers: "850 K", hubs: "Londres, Manchester, Cambridge", color: "#a78bfa", coordinates: [-2, 54] },
  { id: "250", name: "France", rank: 6, developers: "600 K", hubs: "Paris, Lyon, Toulouse", color: "#b4a8e6", coordinates: [2, 47] },
  { id: "076", name: "Brésil", rank: 7, developers: "1,8 M", hubs: "São Paulo, Rio, Florianópolis", color: "#c4b5f5", coordinates: [-53, -10] },
  { id: "392", name: "Japon", rank: 8, developers: "1,1 M", hubs: "Tokyo, Osaka, Kyoto", color: "#a78bfa", coordinates: [138, 36] },
  { id: "124", name: "Canada", rank: 9, developers: "400 K", hubs: "Toronto, Vancouver, Montréal", color: "#b4a8e6", coordinates: [-106, 56] },
  { id: "036", name: "Australie", rank: 10, developers: "300 K", hubs: "Sydney, Melbourne, Brisbane", color: "#c4b5f5", coordinates: [134, -25] },
  { id: "410", name: "Corée du Sud", rank: 11, developers: "500 K", hubs: "Séoul, Busan, Daegu", color: "#b4a8e6", coordinates: [128, 36] },
  { id: "702", name: "Singapour", rank: 12, developers: "200 K", hubs: "Singapore Hub", color: "#c4b5f5", coordinates: [104, 1] },
  { id: "528", name: "Pays-Bas", rank: 13, developers: "350 K", hubs: "Amsterdam, Rotterdam", color: "#c4b5f5", coordinates: [5, 52] },
  { id: "376", name: "Israël", rank: 14, developers: "300 K", hubs: "Tel Aviv, Herzliya", color: "#c4b5f5", coordinates: [35, 31] },
  { id: "752", name: "Suède", rank: 15, developers: "250 K", hubs: "Stockholm, Göteborg", color: "#c4b5f5", coordinates: [15, 62] },
];

const RANK_IDS = new Set(COUNTRIES.map((c) => c.id));

function getDotRadius(rank: number): number {
  if (rank <= 3) return 7;
  if (rank <= 6) return 5;
  if (rank <= 10) return 4;
  return 3;
}

export function WorldMap() {
  const [hovered, setHovered] = useState<CountryData | null>(null);
  const [selected, setSelected] = useState<CountryData | null>(null);
  const active = selected || hovered;

  const countryMap = useMemo(() => {
    const map = new Map<string, CountryData>();
    COUNTRIES.forEach((c) => map.set(c.id, c));
    return map;
  }, []);

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
      {/* Ranking panel */}
      <div className="shrink-0 lg:w-64">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-tertiary">
          Top 15 — Développeurs
        </h3>
        <div className="space-y-1">
          {COUNTRIES.map((country) => {
            const isActive = active?.id === country.id;
            return (
              <div
                key={country.id}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 cursor-pointer transition-colors ${
                  isActive
                    ? "bg-accent-primary/10 text-accent-primary"
                    : "text-text-secondary hover:bg-bg-tertiary"
                }`}
                onMouseEnter={() => setHovered(country)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(isActive && selected ? null : country)}
              >
                <span className="w-5 text-right text-xs font-bold text-text-tertiary">
                  {country.rank}
                </span>
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: country.color }}
                />
                <span className="flex-1 truncate text-sm font-medium">
                  {country.name}
                </span>
                <span className="text-xs text-text-tertiary">
                  {country.developers}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Map */}
      <div className="relative flex-1">
        <div className="relative overflow-hidden rounded-2xl border border-border-primary bg-bg-card">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 130,
              center: [20, 20],
            }}
            className="w-full"
            style={{ aspectRatio: "16/9" }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryId = geo.id;
                  const isHighlighted = RANK_IDS.has(countryId);
                  const isActiveCountry = active?.id === countryId;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isActiveCountry ? "#7c3aed" : isHighlighted ? "#c4b5f5" : "var(--bg-tertiary)"}
                      stroke={isHighlighted ? "#7c3aed" : "var(--border-primary)"}
                      strokeWidth={isActiveCountry ? 1.2 : 0.4}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", fill: isHighlighted ? "#8b5cf6" : "var(--bg-tertiary)" },
                        pressed: { outline: "none" },
                      }}
                      onMouseEnter={() => {
                        if (isHighlighted) {
                          const data = countryMap.get(countryId);
                          if (data) setHovered(data);
                        }
                      }}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => {
                        const data = countryMap.get(countryId);
                        if (data) {
                          setSelected(selected?.id === countryId ? null : data);
                        }
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {/* Markers for ranked countries */}
            {COUNTRIES.map((country) => {
              const isActive = active?.id === country.id;
              const r = getDotRadius(country.rank);
              return (
                <Marker
                  key={country.id}
                  coordinates={country.coordinates}
                  onMouseEnter={() => setHovered(country)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(selected?.id === country.id ? null : country)}
                >
                  {isActive && (
                    <circle r={r + 5} fill={country.color} opacity={0.25} />
                  )}
                  <circle r={r} fill={country.color} opacity={0.9} className="cursor-pointer" />
                  {country.rank <= 3 && (
                    <text
                      textAnchor="middle"
                      y={-r - 5}
                      className="fill-text-primary text-[8px] font-bold pointer-events-none"
                    >
                      {country.name}
                    </text>
                  )}
                </Marker>
              );
            })}
          </ComposableMap>

          {/* Tooltip */}
          {active && (
            <div
              className="pointer-events-none absolute z-10 rounded-xl border border-border-primary bg-bg-card p-4 shadow-lg"
              style={{
                left: "50%",
                top: "16px",
                transform: "translateX(-50%)",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: active.color }}
                />
                <span className="text-sm font-bold text-text-primary">
                  {active.name}
                </span>
              </div>
              <div className="mt-2 space-y-1">
                <div className="flex items-center justify-between gap-6 text-xs">
                  <span className="text-text-tertiary">Rang mondial</span>
                  <span className="font-semibold text-accent-primary">#{active.rank}</span>
                </div>
                <div className="flex items-center justify-between gap-6 text-xs">
                  <span className="text-text-tertiary">Développeurs</span>
                  <span className="font-semibold text-text-primary">{active.developers}</span>
                </div>
                <div className="flex items-center justify-between gap-6 text-xs">
                  <span className="text-text-tertiary">Hubs tech</span>
                  <span className="font-semibold text-text-primary">{active.hubs}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
