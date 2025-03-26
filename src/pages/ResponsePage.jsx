import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResponsePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const responseData = location.state?.responseData || "No data received.";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {/* Move button to the top */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md"
      >
        Back to Debugger
      </button>

      {/* Response Box with wider width */}
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg overflow-auto">
        <h2 className="text-2xl font-bold mb-4">API Response</h2>
        <pre className="bg-gray-700 p-4 rounded-lg overflow-auto whitespace-pre-wrap text-sm">
          {JSON.stringify(responseData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ResponsePage;
