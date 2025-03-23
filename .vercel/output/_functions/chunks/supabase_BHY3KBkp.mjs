import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://fdphvhfynfylpsihvjoc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkcGh2aGZ5bmZ5bHBzaWh2am9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MDM0ODUsImV4cCI6MjA1ODA3OTQ4NX0.XBsyzYoZawBnygk7xgDjc0gjPnNZiLwSjyol8l_A4iU"
);

export { supabase as s };
