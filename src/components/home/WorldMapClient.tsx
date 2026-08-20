"use client";

import dynamic from "next/dynamic";

const WorldMap = dynamic(
  () => import("@/components/home/WorldMap").then((m) => m.WorldMap),
  { ssr: false }
);

export function WorldMapClient() {
  return <WorldMap />;
}
