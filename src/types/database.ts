export type UserRole = "worker" | "customer";

export type ServiceCategory =
  | "plumber"
  | "electrician"
  | "painter"
  | "handyman"
  | "locksmith"
  | "cleaner";

export type BookingStatus =
  | "pending"
  | "accepted"
  | "in_progress"
  | "completed"
  | "cancelled";

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  phone: string | null;
  avatar_url: string | null;
  is_online: boolean;
  service_category: ServiceCategory | null;
  hourly_rate: number | null;
  rating: number;
  total_jobs: number;
  last_location: { lng: number; lat: number } | null;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  category: ServiceCategory;
  name: string;
  description: string;
  icon: string;
  created_at: string;
}

export interface Booking {
  id: string;
  customer_id: string;
  worker_id: string;
  service_id: string;
  status: BookingStatus;
  description: string;
  location: { lng: number; lat: number };
  address: string;
  scheduled_at: string | null;
  started_at: string | null;
  completed_at: string | null;
  price: number | null;
  created_at: string;
  updated_at: string;
}

export interface NearbyWorker {
  id: string;
  full_name: string;
  service_category: ServiceCategory;
  hourly_rate: number | null;
  rating: number;
  total_jobs: number;
  avatar_url: string | null;
  lat: number;
  lng: number;
  distance: number;
}
