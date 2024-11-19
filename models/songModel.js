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
/**
 *  get record 
 * @returns array
 */
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
 * @param {number} id
 * @returns data object
 * 
 */
  static getRecordById = async id => {
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

  static createRecord = async formdata => {
    try {
      const { data, error } = await supabase
      .from("songs")
     .insert([{
      title: formdata.title,
      content: formdata.content,
      lyrics: formdata.lyrics,
    }]);

      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error(`Error: Cannot fetch songs, ${error}`);
    }
  };
}

