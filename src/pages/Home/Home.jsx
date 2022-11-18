import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import "./Home.scss";
import logo from "../../assets/logo.png";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  throw new Error("Error en Home");
  return (
    <>
      <div className="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 500">
          <path
            fill="#a9235f"
            fillOpacity="1"
            d="M0,160L14.1,154.7C28.2,149,56,139,85,112C112.9,85,141,43,169,21.3C197.6,0,226,0,254,10.7C282.4,21,311,43,339,53.3C367.1,64,395,64,424,58.7C451.8,53,480,43,508,42.7C536.5,43,565,53,593,53.3C621.2,53,649,43,678,48C705.9,53,734,75,762,117.3C790.6,160,819,224,847,245.3C875.3,267,904,245,932,240C960,235,988,245,1016,218.7C1044.7,192,1073,128,1101,128C1129.4,128,1158,192,1186,202.7C1214.1,213,1242,171,1271,149.3C1298.8,128,1327,128,1355,144C1383.5,160,1412,192,1426,208L1440,224L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"
          ></path>
        </svg>
      </div>
      <NavBar />
      <main className="main__container content">
        <div className="content__text">
          <h1>
            Encuentra los <strong>mejores</strong> lugares donde disfrutar tu
            cumpleaños con <strong>Birthmeal</strong>
          </h1>
          <button className="content__button">Descarga la app!</button>
        </div>
        <div className="content__image">
          <img src={logo} />
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Home;
