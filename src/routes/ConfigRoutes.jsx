import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Proyects } from "../components/Proyects";
import { Contacts } from "../components/Contacts";
import { Resume } from "../components/Resume";
import { NotFound } from "../components/NotFound";
import { HeaderNav } from "../components/header/HeaderNav";

export const ConfigRoutes = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/contactos" element={<Contacts />} />
        <Route path="/proyectos" element={<Proyects />} />
        <Route path="/curriculum" element={<Resume />} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};
