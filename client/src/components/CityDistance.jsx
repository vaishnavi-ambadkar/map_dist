
// import { useState } from "react";

// const CityDistance = () => {
//   const [source, setSource] = useState("");
//   const [destination, setDestination] = useState("");
//   const [distance, setDistance] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const calculateDistance = async () => {
//     setError("");
//     setDistance(null);

//     if (!source.trim() || !destination.trim()) {
//       setError("Both city names are required.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/calculate-distance", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ source, destination }),
//       });

//       if (!response.ok) throw new Error("Failed to fetch distance");

//       const data = await response.json();
//       setDistance(data.distance);
//     } catch (error) {
//       setError("Error fetching distance. Please try again.");
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to swap source and destination cities
//   const switchCities = () => {
//     setSource(destination);
//     setDestination(source);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <h2>City Distance Calculator</h2>

//       <input
//         type="text"
//         placeholder="Enter Source City"
//         value={source}
//         onChange={(e) => setSource(e.target.value)}
//         style={{ marginRight: "10px", padding: "5px" }}
//       />
//       <input
//         type="text"
//         placeholder="Enter Destination City"
//         value={destination}
//         onChange={(e) => setDestination(e.target.value)}
//         style={{ padding: "5px" }}
//       />

//       <br />

//       <button
//         onClick={switchCities}
//         style={{
//           margin: "10px",
//           padding: "8px",
//           cursor: "pointer",
//           backgroundColor: "#f0ad4e",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//         }}
//       >
//         🔄 Switch Cities
//       </button>

//       <button
//         onClick={calculateDistance}
//         style={{
//           padding: "8px",
//           cursor: "pointer",
//           backgroundColor: "#007bff",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//         }}
//         disabled={loading}
//       >
//         {loading ? "Calculating..." : "Get Distance"}
//       </button>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {distance !== null && (
//         <div style={{ marginTop: "20px", fontSize: "18px" }}>
//           <h3>Distance: {distance} km</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CityDistance;
import { useState } from "react";

const CityDistance = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const calculateDistance = async () => {
    setError("");
    setDistance(null);

    if (!source.trim() || !destination.trim()) {
      setError("Both city names are required.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://map-dist-b.vercel.app/calculate-distance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source, destination }),
      });

      if (!response.ok) throw new Error("Failed to fetch distance");

      const data = await response.json();
      setDistance(data.distance);
    } catch (error) {
      setError("Error fetching distance. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const switchCities = () => {
    setSource(destination);
    setDestination(source);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        background: "linear-gradient(to right, #141E30, #243B55)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          background: "rgba(0, 0, 0, 0.8)",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "600px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2 style={{ marginBottom: "15px", fontSize: "22px" }}>
          🌍 City Distance Calculator
        </h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <input
            type="text"
            placeholder="Enter Source City"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontSize: "16px",
              color: "black",
            }}
          />
          <input
            type="text"
            placeholder="Enter Destination City"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontSize: "16px",
              color: "black",
            }}
          />
        </div>

        <br />

        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            onClick={switchCities}
            style={{
              flex: 1,
              padding: "10px",
              cursor: "pointer",
              backgroundColor: "#f0ad4e",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              transition: "0.3s",
            }}
          >
            🔄 Switch Cities
          </button>

          <button
            onClick={calculateDistance}
            style={{
              flex: 1,
              padding: "10px",
              cursor: "pointer",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              transition: "0.3s",
            }}
            disabled={loading}
          >
            {loading ? "Calculating..." : "Get Distance"}
          </button>
        </div>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        {distance !== null && (
          <div
            style={{
              marginTop: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              padding: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              display: "inline-block",
              width: "auto",
            }}
          >
            <h3>📍 Distance: {distance} km</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CityDistance;

