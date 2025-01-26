// src/pages/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const loanCategories = [
    {
      name: "Wedding Loans",
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: "PKR 5 Lakh",
      period: "3 years",
      icon: "💍",
    },
    {
      name: "Home Construction Loans",
      subcategories: ["Structure", "Finishing"],
      maxLoan: "PKR 10 Lakh",
      period: "5 years",
      icon: "🏠",
    },
    {
      name: "Business Startup Loans",
      subcategories: ["Buy Stall", "Advance Rent", "Shop Machinery"],
      maxLoan: "PKR 10 Lakh",
      period: "5 years",
      icon: "📈",
    },
    {
      name: "Education Loans",
      subcategories: ["University Fees", "Child Fees"],
      maxLoan: "Based on requirement",
      period: "4 years",
      icon: "🎓",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      <div style={{
        background: "url('/images/hero-bg.jpg') center/cover no-repeat, linear-gradient(135deg, rgba(0, 123, 255, 0.8), rgba(102, 16, 242, 0.8))",
        color: "#fff",
        padding: "50px 20px",
        textAlign: "center",
        position: "relative",
      }}>
        <h1>Welcome to the Saylani Microfinance App</h1>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>Empowering you with interest-free loans under the Qarze Hasana program.</p>
      </div>

      {/* Loan Categories Section */}
      <div style={{ maxWidth: "1200px", margin: "30px auto", padding: "0 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Explore Our Loan Categories</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {loanCategories.map((category, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div style={{ fontSize: "40px", textAlign: "center", marginBottom: "10px" }}>{category.icon}</div>
              <h3 style={{ color: "#007bff", textAlign: "center" }}>{category.name}</h3>
              <p><strong>Subcategories:</strong> {category.subcategories.join(", ")}</p>
              <p><strong>Maximum Loan:</strong> {category.maxLoan}</p>
              <p><strong>Loan Period:</strong> {category.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/calculator" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "15px 30px",
              backgroundImage: "linear-gradient(135deg, #007bff, #6610f2)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s, transform 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundImage = "linear-gradient(135deg, #0056b3, #520dc2)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundImage = "linear-gradient(135deg, #007bff, #6610f2)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Go to Loan Calculator
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
