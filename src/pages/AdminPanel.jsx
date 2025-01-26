// src/pages/AdminPanel.js
import React, { useState } from "react";

const AdminPanel = () => {
  const [filterStatus, setFilterStatus] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "John Doe",
      category: "Wedding Loans",
      subcategory: "Valima Food",
      loanAmount: "PKR 500,000",
      guarantors: [
        { name: "Ali Raza", cnic: "42101-1234567-1", contact: "0300-1234567" },
        { name: "Sarah Ahmed", cnic: "42101-7654321-1", contact: "0301-7654321" },
      ],
      userInfo: {
        address: "123 Main Street, Karachi",
        phone: "0321-9876543",
        email: "johndoe@example.com",
      },
      status: "Approved",
      city: "Karachi",
      country: "Pakistan",
      token: "12345",
      appointment: "2025-02-01 10:30 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      category: "Education Loans",
      subcategory: "University Fees",
      loanAmount: "PKR 200,000",
      guarantors: [
        { name: "Ahmed Khan", cnic: "42201-1122334-2", contact: "0345-1122334" },
        { name: "Ayesha Ali", cnic: "42201-4433221-3", contact: "0333-4433221" },
      ],
      userInfo: {
        address: "45 University Road, Lahore",
        phone: "0302-5566778",
        email: "janesmith@example.com",
      },
      status: "Pending",
      city: "Lahore",
      country: "Pakistan",
      token: "",
      appointment: "",
    },
  ]);

  const handleStatusFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleCityFilterChange = (e) => {
    setFilterCity(e.target.value);
  };

  const handleCountryFilterChange = (e) => {
    setFilterCountry(e.target.value);
  };

  const handleAddToken = (id) => {
    const token = prompt("Enter token number:");
    if (token) {
      setApplications((prevApplications) =>
        prevApplications.map((app) =>
          app.id === id ? { ...app, token } : app
        )
      );
    }
  };

  const handleViewDetails = (application) => {
    const guarantorDetails = application.guarantors
      .map(
        (g, index) =>
          `Guarantor ${index + 1}:\n  Name: ${g.name}\n  CNIC: ${g.cnic}\n  Contact: ${g.contact}`
      )
      .join("\n\n");

    alert(`Details for ${application.name}:

Category: ${application.category}
Subcategory: ${application.subcategory}
Loan Amount: ${application.loanAmount}
Status: ${application.status}
City: ${application.city}
Country: ${application.country}
Token: ${application.token || "N/A"}
Appointment: ${application.appointment || "N/A"}

User Information:
  Address: ${application.userInfo.address}
  Phone: ${application.userInfo.phone}
  Email: ${application.userInfo.email}

Guarantor Details:
${guarantorDetails}`);
  };

  const filteredApplications = applications.filter((app) => {
    return (
      (!filterStatus || app.status.toLowerCase() === filterStatus.toLowerCase()) &&
      (!filterCity || app.city.toLowerCase() === filterCity.toLowerCase()) &&
      (!filterCountry || app.country.toLowerCase() === filterCountry.toLowerCase())
    );
  });

  return (
    <div style={{ fontFamily: "Arial, sans-serif", width: "90%", maxWidth: "1200px", margin: "30px auto", padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Admin Panel</h1>

      {/* Filter Section */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px" }}>Filter by Status:</label>
        <select
          value={filterStatus}
          onChange={handleStatusFilterChange}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd", marginRight: "10px" }}
        >
          <option value="">All</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>

        <label style={{ marginRight: "10px" }}>Filter by City:</label>
        <input
          type="text"
          value={filterCity}
          onChange={handleCityFilterChange}
          placeholder="Enter city"
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd", marginRight: "10px" }}
        />

        <label style={{ marginRight: "10px" }}>Filter by Country:</label>
        <input
          type="text"
          value={filterCountry}
          onChange={handleCountryFilterChange}
          placeholder="Enter country"
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
      </div>

      {/* Applications Table */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#007bff", color: "#fff" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#007bff", color: "#fff" }}>Category</th>
            <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#007bff", color: "#fff" }}>Status</th>
            <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#007bff", color: "#fff" }}>City</th>
            <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#007bff", color: "#fff" }}>Country</th>
            <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#007bff", color: "#fff" }}>Token</th>
            <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#007bff", color: "#fff" }}>Appointment</th>
            <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#007bff", color: "#fff" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplications.map((app) => (
            <tr key={app.id}>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{app.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{app.category}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{app.status}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{app.city}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{app.country}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{app.token || "N/A"}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{app.appointment || "N/A"}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                <button
                  onClick={() => handleAddToken(app.id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#ffc107",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  Add Token
                </button>
                <button
                  onClick={() => handleViewDetails(app)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
