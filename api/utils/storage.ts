import { supabaseAdapter } from "@grammyjs/storage-supabase";
import { createClient } from "@supabase/supabase-js";

const URL =
  process.env["SUPABASE_URL"] ?? "https://zrzbwyqoeptuszgqmnin.supabase.co";
const KEY = process.env["SUPABASE_API_KEY"] ?? "anon-key";

// supabase instance
const supabase = createClient(URL, KEY);

//create storage
export const supabaseStorage = supabaseAdapter({
  supabase,
  table: "Session", // the defined table name you want to use to store your session
});
