import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LeadershipPage from "./pages/LeadershipPage";
import LocationsPage from "./pages/LocationsPage";
import GenerosityPage from "./pages/GenerosityPage";
import CellFamilyPage from "./pages/CellFamilyPage";
import PartnersPage from "./pages/PartnersPage";
import SponsorChildPage from "./pages/SponsorChildPage";
import SponsorChildDetailPage from "./pages/SponsorChildDetailPage";
import DonatePage from "./pages/DonatePage";
import MinistryNeedsPage from "./pages/MinistryNeedsPage";
import StatementOfFaithPage from "./pages/StatementOfFaithPage";
import StoriesOfImpactPage from "./pages/StoriesOfImpactPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/generosity" element={<GenerosityPage />} />
            <Route path="/cell-family" element={<CellFamilyPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/sponsor" element={<PartnersPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/ministry-needs" element={<MinistryNeedsPage />} />
            <Route path="/sponsor-child" element={<SponsorChildPage />} />
            <Route path="/sponsor-child/:childName" element={<SponsorChildDetailPage />} />
            <Route path="/statement-of-faith" element={<StatementOfFaithPage />} />
            <Route path="/call2prayer" element={<StatementOfFaithPage />} />
            <Route path="/stories-of-impact" element={<StoriesOfImpactPage />} />
            {/* Add more routes as you create more pages */}
            <Route path="*" element={
              <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
                  <p className="text-2xl text-gray-700 mb-6">Page Not Found</p>
                  <a href="/" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    Go Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
