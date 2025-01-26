// src/pages/CalculatorPage.js
import React, { useState } from "react";

const CalculatorPage = () => {
  const loanCategories = [
    {
      name: "Wedding Loans",
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    },
    {
      name: "Home Construction Loans",
      subcategories: ["Structure", "Finishing"],
    },
    {
      name: "Business Startup Loans",
      subcategories: ["Buy Stall", "Advance Rent", "Shop Machinery"],
    },
    {
      name: "Education Loans",
      subcategories: ["University Fees", "Child Fees"],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [calculatedLoan, setCalculatedLoan] = useState(null);

  const handleCalculate = () => {
    const maxLoanAmount = 500000; // Example static value for the maximum loan amount

    // Calculate the remaining loan after initial deposit
    const remainingLoan = maxLoanAmount - parseInt(initialDeposit || 0);

    // Calculate monthly installments (interest-free)
    const monthlyInstallment = remainingLoan / (parseInt(loanPeriod || 1) * 12);

    setCalculatedLoan({ remainingLoan, monthlyInstallment });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "30px auto", padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Loan Calculator</h1>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Select Loan Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
        >
          <option value="">-- Choose Category --</option>
          {loanCategories.map((category, index) => (
            <option key={index} value={category.name}>{category.name}</option>
          ))}
        </select>
      </div>

      {selectedCategory && (
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Select Subcategory:</label>
          <select
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
          >
            <option value="">-- Choose Subcategory --</option>
            {loanCategories
              .find((category) => category.name === selectedCategory)
              .subcategories.map((subcategory, index) => (
                <option key={index} value={subcategory}>{subcategory}</option>
              ))}
          </select>
        </div>
      )}

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Initial Deposit (PKR):</label>
        <input
          type="number"
          value={initialDeposit}
          onChange={(e) => setInitialDeposit(e.target.value)}
          style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Loan Period (Years):</label>
        <input
          type="number"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(e.target.value)}
          style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
      </div>

      <button
        onClick={handleCalculate}
        style={{
          width: "100%",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Calculate
      </button>

      {calculatedLoan && (
        <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#fff", borderRadius: "5px", border: "1px solid #ddd" }}>
          <h3>Calculation Result:</h3>
          <p><strong>Remaining Loan Amount:</strong> PKR {calculatedLoan.remainingLoan}</p>
          <p><strong>Monthly Installment:</strong> PKR {calculatedLoan.monthlyInstallment.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default CalculatorPage;
