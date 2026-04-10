import { getCategoryIcon, getCategoryColor } from "@/constants";

interface ServiceBadgeProps {
  category: string;
  iconName?: string | null;
  size?: "sm" | "md";
}

export function ServiceBadge({ category, iconName = null, size = "md" }: ServiceBadgeProps) {
  const Icon = getCategoryIcon(iconName);
  const color = getCategoryColor(category);
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
