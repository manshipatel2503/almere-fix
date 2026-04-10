import Link from "next/link";
import { MapPin, Wrench, Clock, Shield, Star } from "lucide-react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { getCategoryIcon, getCategoryColor } from "@/constants";
import { getServiceCategories } from "@/services/serviceCategories";

const FEATURES = [
  {
    icon: MapPin,
    title: "Live Map",
    description: "See available workers near you in real-time on an interactive map.",
  },
  {
    icon: Clock,
    title: "Instant Booking",
    description: "No bidding, no waiting. Book a pro who's available right now.",
  },
  {
    icon: Shield,
    title: "Verified Pros",
    description: "Every worker is verified and rated by the community.",
  },
  {
    icon: Star,
    title: "Fair Pricing",
    description: "Transparent hourly rates — no surprises.",
  },
];

export default async function HomePage() {
  const categories = await getServiceCategories();

  return (
    <>
      <Header />

      <main className="flex-1">
        <HeroSection />
        <ServiceCategoriesSection categories={categories} />
        <FeaturesSection />
      </main>

      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <MapPin className="h-4 w-4" />
            Live in Almere, NL
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Find a local pro{" "}
            <span className="text-accent">in minutes</span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-100 mb-8 max-w-lg">
            Plumber? Electrician? Handyman? See who&apos;s available near you
            right now on our live map. No bidding — just instant help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/map"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-semibold px-6 py-3 rounded-xl hover:bg-brand-50 transition-colors shadow-lg"
            >
              <MapPin className="h-5 w-5" />
              Find a Pro Now
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
            >
              <Wrench className="h-5 w-5" />
              I&apos;m a Worker
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCategoriesSectionProps {
  categories: { id: string; category: string; name: string; icon: string | null }[];
}

function ServiceCategoriesSection({ categories }: ServiceCategoriesSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-10">
          Services available in Almere
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => {
            const Icon = getCategoryIcon(cat.icon);
            const color = getCategoryColor(cat.category);

            return (
              <Link
                key={cat.id}
                href={`/map?category=${cat.category}`}
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <div className={`p-3 rounded-xl ${color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium">{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-10">
          Why AlmereFix?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-8 w-8 text-brand-600 mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
