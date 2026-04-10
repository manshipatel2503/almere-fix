import { createClient } from "@/services/supabaseServer";

export interface ServiceFromDB {
  id: string;
  category: string;
  name: string;
  description: string | null;
  icon: string | null;
}

export async function getServiceCategories(): Promise<ServiceFromDB[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("services")
    .select("id, category, name, description, icon")
    .order("name");

  if (error) {
    console.error("Failed to fetch service categories:", error.message);
    return [];
  }

  return data;
}
