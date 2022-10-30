import React from "react";
import "../../App.scss";
import { useState, useEffect } from "react";
import AxiosIntance from "../../utils/AxiosIntance";

function Companies() {
  const [companies, setCompanies] = useState([]);
  const fetchCompanies = async () => {
    const { data } = await AxiosIntance.get("companies"); //cosas básicas de js, hooks, useState, useEffect, axios, providers
    setCompanies(data);
  };

  useEffect(() => {
    fetchCompanies();
    console.log(companies);
  }, []);

  return (
    <div className="company-modal">
      <h3>Establecimientos</h3>
    </div>
  );
}

export default Companies;
