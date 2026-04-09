"use client";

import { MapPin } from "lucide-react";

interface MapPlaceholderProps {
  className?: string;
}

export function MapPlaceholder({ className = "" }: MapPlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl border-2 border-dashed border-brand-200 ${className}`}
    >
      <div className="text-center p-8">
        <MapPin className="h-12 w-12 text-brand-400 mx-auto mb-4 animate-bounce" />
        <h3 className="text-lg font-semibold text-brand-700 mb-1">
          Live Map Coming Soon
        </h3>
        <p className="text-sm text-brand-500 max-w-xs">
          Connect your Google Maps API key to see real-time worker locations in Almere.
        </p>
      </div>
    </div>
  );
}
