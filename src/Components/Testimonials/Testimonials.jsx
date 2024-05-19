// src/Testimonials.js

import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "John Doe",
      text: "Estate Eyes provided me with the most accurate price prediction. I was able to make an informed decision on buying my new home.",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Jane Smith",
      text: "The market trends analysis from Estate Eyes is top-notch. I knew exactly when and where to invest my money.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Alex Johnson",
      text: "The personalized property reports were incredibly detailed and helpful. Estate Eyes exceeded my expectations!",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="testimonials">
      <h1>What Our Clients Say</h1>
      <div className="testimonial-cards">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
