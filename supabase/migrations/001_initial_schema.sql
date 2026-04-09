-- Enable PostGIS
CREATE EXTENSION IF NOT EXISTS postgis;

-- Profiles (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('worker', 'customer')),
  phone TEXT,
  avatar_url TEXT,
  is_online BOOLEAN NOT NULL DEFAULT false,
  service_category TEXT CHECK (service_category IN ('plumber', 'electrician', 'painter', 'handyman', 'locksmith', 'cleaner')),
  hourly_rate NUMERIC(8,2),
  rating NUMERIC(3,2) NOT NULL DEFAULT 0,
  total_jobs INTEGER NOT NULL DEFAULT 0,
  last_location GEOGRAPHY(POINT, 4326),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Services catalog
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL CHECK (category IN ('plumber', 'electrician', 'painter', 'handyman', 'locksmith', 'cleaner')),
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Bookings
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID NOT NULL REFERENCES public.profiles(id),
  worker_id UUID NOT NULL REFERENCES public.profiles(id),
  service_id UUID REFERENCES public.services(id),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'in_progress', 'completed', 'cancelled')),
  description TEXT,
  location GEOGRAPHY(POINT, 4326),
  address TEXT,
  scheduled_at TIMESTAMPTZ,
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  price NUMERIC(10,2),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Spatial index for proximity queries
CREATE INDEX idx_profiles_location ON public.profiles USING GIST (last_location);
CREATE INDEX idx_profiles_online_workers ON public.profiles (is_online) WHERE role = 'worker';

-- RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Online workers are visible to everyone"
  ON public.profiles FOR SELECT
  USING (role = 'worker' AND is_online = true);

CREATE POLICY "Customers can view their bookings"
  ON public.bookings FOR SELECT
  USING (auth.uid() = customer_id);

CREATE POLICY "Workers can view their bookings"
  ON public.bookings FOR SELECT
  USING (auth.uid() = worker_id);

CREATE POLICY "Customers can create bookings"
  ON public.bookings FOR INSERT
  WITH CHECK (auth.uid() = customer_id);

-- Enable realtime for profiles (worker location updates)
ALTER PUBLICATION supabase_realtime ADD TABLE public.profiles;
