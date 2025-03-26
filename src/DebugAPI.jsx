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
    console.log("🔍 DebugAPI - URL:", url);
    console.log("🔍 DebugAPI - Method:", method);

    if (!url || typeof url !== "string" || url.trim() === "") {
      alert("❌ Please enter a valid API URL.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: method === "GET" || method === "DELETE" ? null : JSON.stringify(JSON.parse(body || "{}")),
      });

      console.log("🚀 Response Status:", response.status);

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid JSON response from API");
      }

      const data = await response.json();
      console.log("✅ API Response:", JSON.stringify(data, null, 2));

      // 🔥 Navigate to Response Page and pass API response
      navigate("/response", { state: { responseData: data } });

    } catch (error) {
      console.error("❌ API Fetch Error:", error.message);
      alert("Failed to fetch API. Check console for more details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 via-indigo-800 to-gray-900 text-white">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center mb-6">API Debugger</h2>

        <div className="mb-4">
          <label className="block text-gray-300 text-lg mb-2">API URL:</label>
          <Input
            type="text"
            placeholder="Enter API URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-lg mb-2">Request Method:</label>
          <Select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </Select>
        </div>

        {(method === "POST" || method === "PUT") && (
          <div className="mb-4">
            <label className="block text-gray-300 text-lg mb-2">Request Body:</label>
            <Textarea
              placeholder="Enter JSON body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
            />
          </div>
        )}

        <div className="flex justify-center mt-6">
          <Button onClick={handleRequest} disabled={loading}>
            {loading ? "Sending..." : "Send Request"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DebugAPI;
