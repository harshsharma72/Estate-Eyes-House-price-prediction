import React, { useState } from "react";
import "./Dashboard.css";
import hash from "hash-sum";
import background from "../../assets/house-background.jpg";

const Dashboard = () => {
  const [area, setArea] = useState("");
  const [bhk, setBhk] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [location, setLocation] = useState("");
  const [areaType, setAreaType] = useState("");
  const [availability, setAvailability] = useState("");
  const [balcony, setBalcony] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const handleEstimatePrice = () => {
    // Create a unique hash based on the user inputs
    const inputHash = hash({
      area,
      bhk,
      bathroom,
      location,
      areaType,
      availability,
      balcony,
    });

    // Use the hash to seed the pseudo-random price generator
    const basePricePerSqFt =
      45000 + (parseInt(inputHash.slice(0, 5), 16) % 1000); // Random base price between 45000 and 46000
    const randomFactor =
      ((parseInt(inputHash.slice(5, 10), 16) % 11) + 95) / 100; // Random factor between 0.95 and 1.05
    const price = Math.floor(area * basePricePerSqFt * randomFactor);

    setEstimatedPrice(`Estimated Price: ₹${price.toLocaleString()}`);
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
    handleEstimatePrice();
  };

  const locations = [
    "Whitefield",
    "Marathahalli",
    "Electronic City",
    "Koramangala",
    "Indiranagar",
    "MG Road",
    "Jayanagar",
    "JP Nagar",
    "Banashankari",
    "Basavanagudi",
    "Malleshwaram",
    "Rajajinagar",
    "Hebbal",
    "Yelahanka",
    "RT Nagar",
    "Kalyan Nagar",
    "Hennur",
    "HSR Layout",
    "Bellandur",
    "Sarjapur Road",
    "Bannerghatta Road",
    "BTM Layout",
    "Bommanahalli",
    "Hosur Road",
    "Old Madras Road",
    "KR Puram",
    "Mahadevapura",
    "Cox Town",
    "Fraser Town",
    "Richmond Town",
    "Ulsoor",
    "Vasanth Nagar",
    "Sanjay Nagar",
    "Nagarbhavi",
    "Kengeri",
    "Mysore Road",
    "Vijayanagar",
    "Magadi Road",
    "Peenya",
    "Nandini Layout",
    "Mathikere",
    "Yeshwanthpur",
    "Jalahalli",
    "Vidyaranyapura",
    "Sahakar Nagar",
    "Rajarajeshwari Nagar",
    "Banashankari Stage I",
    "Banashankari Stage II",
    "Banashankari Stage III",
    "Banashankari Stage IV",
    "Banashankari Stage V",
    "Banashankari Stage VI",
    "Basaveshwaranagar",
    "Kammanahalli",
    "HRBR Layout",
    "Banaswadi",
    "Horamavu",
    "Ramamurthy Nagar",
    "Kasturi Nagar",
    "Kaggadasapura",
    "CV Raman Nagar",
    "Thippasandra",
    "Domlur",
    "Murugeshpalya",
    "Jeevanbheema Nagar",
    "HAL Layout",
    "Kodihalli",
    "GM Palya",
    "Old Airport Road",
    "Brookefield",
    "Doddanekundi",
    "Munnekollal",
    "Kundalahalli",
    "Kadubeesanahalli",
    "Panathur",
    "Varthur",
    "Gunjur",
    "Carmelaram",
    "Sarjapur",
    "Kasavanahalli",
    "Haralur Road",
    "HSR Layout Sector 1",
    "HSR Layout Sector 2",
    "HSR Layout Sector 3",
    "HSR Layout Sector 4",
    "HSR Layout Sector 5",
    "HSR Layout Sector 6",
    "HSR Layout Sector 7",
    "Hoodi",
    "ITPL",
    "Dodda Banaswadi",
    "Chikka Banaswadi",
    "TC Palya",
    "KR Garden",
    "Pai Layout",
    "Nagavara",
    "Thanisandra",
    "Hegde Nagar",
    "Jakkur",
  ];

  return (
    <div
      className="dashboard"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1>Estimate Your House Price</h1>
      <div className="form">
        <div className="form-group">
          <label>Area (square feet):</label>
          <input
            type="number"
            value={area}
            onChange={handleInputChange(setArea)}
          />
        </div>
        <div className="form-group">
          <label>BHK:</label>
          <select value={bhk} onChange={handleInputChange(setBhk)}>
            <option value="">Select BHK</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4 BHK</option>
            <option value="5">5 BHK</option>
          </select>
        </div>
        <div className="form-group">
          <label>Bathroom:</label>
          <select value={bathroom} onChange={handleInputChange(setBathroom)}>
            <option value="">Select Bathroom</option>
            <option value="1">1 Bathroom</option>
            <option value="2">2 Bathrooms</option>
            <option value="3">3 Bathrooms</option>
            <option value="4">4 Bathrooms</option>
          </select>
        </div>
        <div className="form-group">
          <label>Location:</label>
          <select value={location} onChange={handleInputChange(setLocation)}>
            <option value="">Select Location</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Area Type:</label>
          <select value={areaType} onChange={handleInputChange(setAreaType)}>
            <option value="">Select Area Type</option>
            <option value="Super built-up area">Super built-up area</option>
            <option value="Plot area">Plot area</option>
            <option value="Built-up area">Built-up area</option>
          </select>
        </div>
        <div className="form-group">
          <label>Availability:</label>
          <select
            value={availability}
            onChange={handleInputChange(setAvailability)}
          >
            <option value="">Select Availability</option>
            <option value="Ready to move">Ready to move</option>
            <option value="Under construction">Under construction</option>
          </select>
        </div>
        <div className="form-group">
          <label>Balcony:</label>
          <select value={balcony} onChange={handleInputChange(setBalcony)}>
            <option value="">Select Balcony</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button onClick={handleEstimatePrice}>Estimate Price</button>
        {estimatedPrice && <div className="result">{estimatedPrice}</div>}
      </div>
    </div>
  );
};

export default Dashboard;
