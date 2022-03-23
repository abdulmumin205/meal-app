import React from "react";
import About from "../About/About";
import Contact from "../components/contact/Contact";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import NavBar from "../components/navbar/NavBar";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
