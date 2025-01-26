// src/pages/UserDashboard.js
import React from "react";

const UserDashboard = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main Street, Karachi",
    phone: "0300-1234567",
  };

  const loanDetails = {
    category: "Wedding Loans",
    subcategory: "Valima Food",
    loanAmount: "PKR 500,000",
    remainingAmount: "PKR 400,000",
    monthlyInstallment: "PKR 11,111",
    status: "Approved",
  };

  const appointmentDetails = {
    date: "2025-02-01",
    time: "10:30 AM",
    location: "Saylani Welfare Office, Karachi",
    tokenNumber: "12345",
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", width: "90%", maxWidth: "1200px auto", margin: "30px auto", padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>User Dashboard</h1>

      {/* User Information */}
      <div style={{ marginBottom: "20px", padding: "15px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #ddd" }}>
        <h2>User Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>

      {/* Loan Details */}
      <div style={{ marginBottom: "20px", padding: "15px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #ddd" }}>
        <h2>Loan Details</h2>
        <p><strong>Category:</strong> {loanDetails.category}</p>
        <p><strong>Subcategory:</strong> {loanDetails.subcategory}</p>
        <p><strong>Loan Amount:</strong> {loanDetails.loanAmount}</p>
        <p><strong>Remaining Amount:</strong> {loanDetails.remainingAmount}</p>
        <p><strong>Monthly Installment:</strong> {loanDetails.monthlyInstallment}</p>
        <p><strong>Status:</strong> {loanDetails.status}</p>
      </div>

      {/* Appointment Details */}
      <div style={{ padding: "15px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #ddd" }}>
        <h2>Appointment Details</h2>
        <p><strong>Date:</strong> {appointmentDetails.date}</p>
        <p><strong>Time:</strong> {appointmentDetails.time}</p>
        <p><strong>Location:</strong> {appointmentDetails.location}</p>
        <p><strong>Token Number:</strong> {appointmentDetails.tokenNumber}</p>
      </div>
    </div>
  );
};

export default UserDashboard;
