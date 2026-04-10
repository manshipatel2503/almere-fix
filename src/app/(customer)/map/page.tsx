import { Header } from "@/components/ui/header";
import { MapPlaceholder } from "@/components/features/map-placeholder";
import { getServiceCategories } from "@/services/serviceCategories";

export const metadata = {
  title: "Find a Pro — AlmereFix",
};

export default async function MapPage() {
  const categories = await getServiceCategories();

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <div className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto">
            <button className="shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-brand-600 text-white">
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-brand-50 hover:text-brand-700 transition-colors"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 p-4">
          <MapPlaceholder className="w-full h-full min-h-[60vh]" />
        </div>
      </main>
    </>
  );
}
