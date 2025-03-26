import { useLocation, useNavigate } from "react-router-dom";

const ResponsePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const responseData = location.state?.responseData;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-10">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-center mb-4">API Response</h1>
        {responseData ? (
          <pre className="bg-gray-700 p-4 rounded-md overflow-x-auto">
            {JSON.stringify(responseData, null, 2)}
          </pre>
        ) : (
          <p className="text-center text-red-400">No response data available.</p>
        )}
        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            Back to API Debugger
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsePage;
