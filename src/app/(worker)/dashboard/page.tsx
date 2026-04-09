"use client";

import { useState } from "react";
import { Header } from "@/components/ui/header";
import { MapPin, Power, Star, Briefcase, Clock, TrendingUp } from "lucide-react";

export default function WorkerDashboard() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Online Toggle */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-1">Worker Dashboard</h1>
                <p className="text-sm text-gray-500">
                  {isOnline
                    ? "You are visible to customers on the map"
                    : "Go online to start receiving job requests"}
                </p>
              </div>
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`relative flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  isOnline
                    ? "bg-green-500 text-white shadow-lg shadow-green-200"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                <Power className="h-5 w-5" />
                {isOnline ? "Online" : "Offline"}
                {isOnline && (
                  <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-400 animate-ping" />
                )}
              </button>
            </div>

            {isOnline && (
              <div className="mt-4 flex items-center gap-2 text-sm text-green-600 bg-green-50 rounded-lg px-4 py-2">
                <MapPin className="h-4 w-4" />
                Broadcasting your location in Almere
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { icon: Star, label: "Rating", value: "4.8", color: "text-yellow-500" },
              { icon: Briefcase, label: "Total Jobs", value: "0", color: "text-brand-600" },
              { icon: Clock, label: "This Week", value: "0 hrs", color: "text-purple-500" },
              { icon: TrendingUp, label: "Earnings", value: "€0", color: "text-green-500" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl border border-gray-200 p-4"
              >
                <stat.icon className={`h-5 w-5 ${stat.color} mb-2`} />
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent Jobs */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-semibold mb-4">Recent Jobs</h2>
            <div className="flex flex-col items-center justify-center py-12 text-gray-400">
              <Briefcase className="h-10 w-10 mb-3" />
              <p className="text-sm">No jobs yet. Go online to start receiving requests.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
