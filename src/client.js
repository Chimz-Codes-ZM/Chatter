import {createClient} from "@supabase/supabase-js"

const supabaseUrl ="https://ohsnvyhvkdaocrhtndqs.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oc252eWh2a2Rhb2NyaHRuZHFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc1MjkxNzAsImV4cCI6MjAwMzEwNTE3MH0.V2kHnvNBZvp0qGOBcjPi2Przx0vKCCCfszjUXXDk8Dg"
export const supabase = createClient(supabaseUrl, supabaseKey)