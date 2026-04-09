import { Wrench } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-500">
            <Wrench className="h-4 w-4" />
            <span className="text-sm font-medium">AlmereFix</span>
          </div>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} AlmereFix. Built for Almere, NL.
          </p>
        </div>
      </div>
    </footer>
  );
}
