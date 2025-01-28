import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { getMethod, initGoogleClient } from "../config/config_key";


const Overview: React.FC = () => {
  const [data, setData] = useState<string[][]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  // อัปเดตสถานะการล็อกอิน
  const updateSigninStatus = (isSignedIn: boolean) => {
    setIsSignedIn(isSignedIn);
  };

  // ตรวจสอบว่ามี keysheets ใน localStorage หรือไม่
  const checkSpreadsheetId = () => {
    const spreadsheetId = localStorage.getItem("keysheets");
    if (!spreadsheetId) {
      console.warn("keysheets is not set in localStorage.");
    }
    return spreadsheetId; // คืนค่า (null หากไม่มีค่า)
  };
  

  // เริ่มต้น Google API Client
  useEffect(() => {
    const initClient = async () => {
      try {
        checkSpreadsheetId();
        await initGoogleClient();
        const authInstance = gapi.auth2.getAuthInstance();
        setIsSignedIn(authInstance.isSignedIn.get());
        authInstance.isSignedIn.listen(updateSigninStatus);
      } catch (err) {
        console.error("Failed to initialize client", err);
        setError("Failed to initialize client");
      }
    };

    gapi.load("client:auth2", initClient);
  }, []);

  // ฟังก์ชันตัวอย่างการใช้งาน
  const handleGetData = async () => {
    try {
      setLoading(true);
      const result = await getMethod("A1:A4");
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Google Sheets Integration</h1>
      {!isSignedIn ? (
        <button onClick={() => gapi.auth2.getAuthInstance().signIn()}>Sign In</button>
      ) : (
        <>
          <button onClick={handleGetData}>Get Data</button>
        </>
      )}

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && data.length > 0 && (
        <table border={1}>
          <thead>
            <tr>
              {data[0]?.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Overview;
