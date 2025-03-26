import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Welcome to Debugging API UI</h1>
      <div style={{ marginTop: "20px" }}>
        <Link to="/about">
          <button style={{ margin: "10px", padding: "12px 24px", fontSize: "16px", backgroundColor: "#4c5fd5", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Go to About Page
          </button>
        </Link>
        <Link to="/debug">
          <button style={{ margin: "10px", padding: "12px 24px", fontSize: "16px", backgroundColor: "#4c5fd5", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Go to Debug API
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
