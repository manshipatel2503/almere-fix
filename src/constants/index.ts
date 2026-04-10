import {
  Wrench,
  Zap,
  Paintbrush,
  Hammer,
  KeyRound,
  SprayCan,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

export const ALMERE_CENTER = {
  lat: 52.3508,
  lng: 5.2647,
} as const;

export const DEFAULT_ZOOM = 13;
export const DEFAULT_SEARCH_RADIUS_KM = 10;
export const DEFAULT_SEARCH_RADIUS_M = DEFAULT_SEARCH_RADIUS_KM * 1000;

/**
 * Maps DB icon names → Lucide components.
 * DB stores OUR internal names (not Lucide's). If Lucide renames
 * an icon in a future version, we only update this map — not the DB.
 */
const ICON_REGISTRY: Record<string, LucideIcon> = {
  wrench: Wrench,
  zap: Zap,
  paintbrush: Paintbrush,
  hammer: Hammer,
  "key-round": KeyRound,
  "spray-can": SprayCan,
};

const COLOR_REGISTRY: Record<string, string> = {
  plumber:     "bg-blue-100 text-blue-600",
  electrician: "bg-yellow-100 text-yellow-600",
  painter:     "bg-purple-100 text-purple-600",
  handyman:    "bg-orange-100 text-orange-600",
  locksmith:   "bg-gray-100 text-gray-600",
  cleaner:     "bg-green-100 text-green-600",
};

export const FALLBACK_ICON: LucideIcon = HelpCircle;

export function getCategoryIcon(iconName: string | null): LucideIcon {
  if (iconName && !(iconName in ICON_REGISTRY)) {
    console.warn(`[ICON_REGISTRY] Unknown icon "${iconName}" — using fallback. Add it to ICON_REGISTRY.`);
  }
  return (iconName && ICON_REGISTRY[iconName]) || FALLBACK_ICON;
}

export function getCategoryColor(category: string): string {
  return COLOR_REGISTRY[category] || "bg-gray-100 text-gray-600";
}
