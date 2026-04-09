export const ALMERE_CENTER = {
  lat: 52.3508,
  lng: 5.2647,
} as const;

export const DEFAULT_ZOOM = 13;
export const DEFAULT_SEARCH_RADIUS_KM = 10;
export const DEFAULT_SEARCH_RADIUS_M = DEFAULT_SEARCH_RADIUS_KM * 1000;

export const SERVICE_CATEGORIES = [
  { value: "plumber", label: "Plumber", icon: "Wrench" },
  { value: "electrician", label: "Electrician", icon: "Zap" },
  { value: "painter", label: "Painter", icon: "Paintbrush" },
  { value: "handyman", label: "Handyman", icon: "Hammer" },
  { value: "locksmith", label: "Locksmith", icon: "KeyRound" },
  { value: "cleaner", label: "Cleaner", icon: "SprayCanIcon" },
] as const;
