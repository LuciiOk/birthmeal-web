import React from "react";
import "../App.css";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import AxiosIntance from "../utils/AxiosIntance";

const data = [
  {
    nombreEstablecimiento: "McDonalds",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    nombreEstablecimiento: "Doggis",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    nombreEstablecimiento: "tarragona",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

function CompanyModal() {
  const [companies, setCompanies] = useState([]);
  const fetchCompanies = async () => {
    const { data } = await AxiosIntance.get("companies"); //cosas básicas de js, hooks, useState, useEffect, axios, providers
    setCompanies(data);
  };

  useEffect(() => {
    fetchCompanies()
    console.log(companies);
  }, []);

  return (
    <div className="company-modal">
      <h3>Establecimientos Birthmeal</h3>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>nombre Establecimiento</TableCell>
              <TableCell>descripción</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {companies.map((company) => (
              <TableRow>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CompanyModal;
