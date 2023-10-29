
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://ilsnqnrhkvpglpodeftp.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsc25xbnJoa3ZwZ2xwb2RlZnRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1MzEwMzEsImV4cCI6MjAxNDEwNzAzMX0.DEvXxCYstXh5S-vInMwF_vi1VdCpJhFYhK3NZDdVWBc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;