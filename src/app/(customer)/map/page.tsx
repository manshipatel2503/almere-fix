import { Header } from "@/components/ui/header";
import { MapPlaceholder } from "@/components/features/map-placeholder";
import { SERVICE_CATEGORIES } from "@/services/constants";

export const metadata = {
  title: "Find a Pro — AlmereFix",
};

export default function MapPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Filters bar */}
        <div className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto">
            <button className="shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-brand-600 text-white">
              All
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-brand-50 hover:text-brand-700 transition-colors"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Map area */}
        <div className="flex-1 p-4">
          <MapPlaceholder className="w-full h-full min-h-[60vh]" />
        </div>
      </main>
    </>
  );
}
