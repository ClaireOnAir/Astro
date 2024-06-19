// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../landingpage';
import CTA from '../components/CTA';
import Features from '../components/Features';
import Header from '../components/Header';
import Hero from '../components/Hero';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cta" element={<CTA />} />
      <Route path="/features" element={<Features />} />
      <Route path="/header" element={<Header />} />
      <Route path="/hero" element={<Hero />} />
      {/* Agrega más rutas según tus necesidades */}
    </Routes>
  );
};

export default AppRoutes;

