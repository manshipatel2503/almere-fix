import {
  Wrench,
  Zap,
  Paintbrush,
  Hammer,
  KeyRound,
  SprayCan,
  type LucideIcon,
} from "lucide-react";
import type { ServiceCategory } from "@/types/database";

const iconMap: Record<ServiceCategory, LucideIcon> = {
  plumber: Wrench,
  electrician: Zap,
  painter: Paintbrush,
  handyman: Hammer,
  locksmith: KeyRound,
  cleaner: SprayCan,
};

const colorMap: Record<ServiceCategory, string> = {
  plumber: "bg-blue-100 text-blue-700",
  electrician: "bg-yellow-100 text-yellow-700",
  painter: "bg-purple-100 text-purple-700",
  handyman: "bg-orange-100 text-orange-700",
  locksmith: "bg-gray-100 text-gray-700",
  cleaner: "bg-green-100 text-green-700",
};

interface ServiceBadgeProps {
  category: ServiceCategory;
  size?: "sm" | "md";
}

export function ServiceBadge({ category, size = "md" }: ServiceBadgeProps) {
  const Icon = iconMap[category];
  const color = colorMap[category];
  const sizeClasses = size === "sm" ? "text-xs px-2 py-0.5" : "text-sm px-3 py-1";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium capitalize ${color} ${sizeClasses}`}
    >
      <Icon className={size === "sm" ? "h-3 w-3" : "h-4 w-4"} />
      {category}
    </span>
  );
}
