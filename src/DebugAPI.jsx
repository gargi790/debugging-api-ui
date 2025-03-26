import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./components/ui/input";
import Select from "./components/ui/select";
import Textarea from "./components/ui/textarea";
import Button from "./components/ui/button";

const DebugAPI = () => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRequest = async () => {
    if (!url.trim()) {
      alert("❌ Please enter a valid API URL.");
      return;
    }

    setLoading(true);

    try {
      let requestBody = null;
      if (method !== "GET" && method !== "DELETE" && body.trim()) {
        try {
          requestBody = JSON.parse(body);
        } catch (error) {
          alert("❌ Invalid JSON format in request body.");
          setLoading(false);
          return;
        }
      }

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: requestBody ? JSON.stringify(requestBody) : null,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid JSON response from API");
      }

      const data = await response.json();
      navigate("/response", { state: { responseData: data } });
    } catch (error) {
      alert("Failed to fetch API. Check console for more details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-700 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl max-w-xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-300">API Debugger</h2>

        <div className="mb-4">
          <label className="block text-lg mb-2 text-indigo-200">API URL:</label>
          <Input
            type="text"
            placeholder="Enter API URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2 text-indigo-200">Request Method:</label>
          <Select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-400"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </Select>
        </div>

        {(method === "POST" || method === "PUT") && (
          <div className="mb-4">
            <label className="block text-lg mb-2 text-indigo-200">Request Body:</label>
            <Textarea
              placeholder="Enter JSON body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        )}

        <div className="flex justify-center mt-6">
          <Button
            onClick={handleRequest}
            disabled={loading}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-lg font-semibold shadow-lg transition duration-200"
          >
            {loading ? "Sending..." : "Send Request"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DebugAPI;
