import { supabase } from "../config/configSupabase.js";

export class SongModel {
  static getAllRecords = async () => {
    try {
      const { data, error } = await supabase.from("songs").select("title").limit(10);
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
      const { data, error } = await supabase.from("songs").select("*").eq("id", id).single();
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error(`Error: Cannot fetch songs, ${error}`);
    }
  };

//get single record by id
/**
 * 
 * @returns 
 * @param {number} id
 */
  static getRecordById = async () => {
    try {
      const { data, error } = await supabase
      .from("songs")
      .select("*")
      .eq("id", id)
      .single();

      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error(`Error: Cannot fetch songs, ${error}`);
    }
  };
}
