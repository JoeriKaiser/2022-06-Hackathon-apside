import React from "react";
import { TextField } from "@mui/material";
import ArrayCustomers from "../components/ArrayCustomers";
import logo from "../assets/ROAD.png";
import SpeedDial from "../components/SpeedDial";

function Customers() {
  return (
    <div>
      <header className="top-bar">
        <img src={logo} alt="logo" />
        <SpeedDial />
      </header>
      <div className="table">
        <TextField
          placeholder="Airbus
          "
          sx={{ align: "center", width: 1200, padding: 5 }}
        />
        <ArrayCustomers />
      </div>
    </div>
  );
}

export default Customers;
