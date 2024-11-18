import { supabase } from "../config/configSupabase.js";

export class albumModel {
  static getAllRecords = async () => {
    try {
      const { data, error } = await supabase.from("albums").select("title").limit(10);
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error(`Error: Cannot fetch songs, ${error}`);
    }
  };

getRecord = async (id) => {
    try {
      const { data, error } = await supabase.from("albums").select("*").eq("id", id).single();
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error(`Error: Cannot fetch songs, ${error}`);
    }
  };
}
