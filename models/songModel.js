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
/**
 * 
 * @param {object} formdata 
 * @returns data object
 */
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

  /**
 * id record
 * @param {object} formdata 
 * @returns data object
 */
  static updateRecord = async formdata => {
    try {
      const { data, error } = await supabase
      .from("songs")
     .update([{
      title: formdata.title,
      content: formdata.content,
      lyrics: formdata.lyrics,
    }])
    .eq("id", formdata.id)
    .select()
    .single()    

      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error(`Error: Cannot fetch songs, ${error}`);
    }
  };


  /**
   * delete record
   * @param {object} formdata 
   * @returns 
   */
  static deleteRecord = async formdata => {
   try {
    const { data, error } = await supabase
    .from("songs")
    .delete()
    .eq("id", formdata.id)

    console.log(data
    );
    

    if (error) {
      throw error;
    }
    else{
      return { message: "deleted file ok"};
    }
    return data;
   }
   catch (error) {
    console.error(error);
    
  };
};
};
