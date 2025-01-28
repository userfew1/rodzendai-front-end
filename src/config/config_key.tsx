import { gapi } from "gapi-script";
import { CLIENT_ID, SCOPES } from "../Api/id_key";

// ฟังก์ชันเพื่อดึง SPREADSHEET_ID จาก localStorage
const getSpreadsheetId = (): string => {
    const spreadsheetId = localStorage.getItem("keysheets");
    if (!spreadsheetId) {
      throw new Error("Spreadsheet ID not found in localStorage");
    }
    return spreadsheetId;
  };
  
  /**
   * เริ่มต้น Google API Client
   */
  export const initGoogleClient = async () => {
    try {
      await gapi.client.init({
        clientId: CLIENT_ID,
        scope: SCOPES,
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
      });
      console.log("Google API initialized successfully");
    } catch (err) {
      console.error("Error initializing Google API", err);
      throw new Error("Failed to initialize Google API");
    }
  };
  
  /**
   * Method สำหรับ GET (อ่านข้อมูล)
   */
  export const getMethod = async (range: string): Promise<string[][]> => {
    try {
      const spreadsheetId = getSpreadsheetId();
      const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
  
      if (!response.result || !response.result.values) {
        throw new Error("No data returned");
      }
  
      return response.result.values;
    } catch (err: any) {
      console.error("Error fetching data", err);
      throw new Error(err.message || "Error fetching data");
    }
  };
  
  /**
   * Method สำหรับ POST (เพิ่มข้อมูล)
   */
  export const postMethod = async (range: string, values: string[][]): Promise<void> => {
    try {
      const spreadsheetId = getSpreadsheetId();
      await gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId,
        range,
        valueInputOption: "USER_ENTERED",
        resource: { values },
      });
  
      console.log("Data inserted successfully");
    } catch (err: any) {
      console.error("Error inserting data", err);
      throw new Error(err.message || "Error inserting data");
    }
  };
  
  /**
   * Method สำหรับ PUT (แก้ไขข้อมูล)
   */
  export const putMethod = async (range: string, values: string[][]): Promise<void> => {
    try {
      const spreadsheetId = getSpreadsheetId();
      await gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId,
        range,
        valueInputOption: "USER_ENTERED",
        resource: { values },
      });
  
      console.log("Data updated successfully");
    } catch (err: any) {
      console.error("Error updating data", err);
      throw new Error(err.message || "Error updating data");
    }
  };
  
  /**
   * Method สำหรับ DELETE (ลบข้อมูล)
   */
  export const deleteMethod = async (range: string): Promise<void> => {
    try {
      const spreadsheetId = getSpreadsheetId();
      await gapi.client.sheets.spreadsheets.values.clear({
        spreadsheetId,
        range,
      });
  
      console.log("Data cleared successfully");
    } catch (err: any) {
      console.error("Error clearing data", err);
      throw new Error(err.message || "Error clearing data");
    }
  };

export { CLIENT_ID };
