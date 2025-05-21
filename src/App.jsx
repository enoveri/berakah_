import React from "react";
import { Routes, Route, Link } from "react-router-dom";
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
import ChoirPage from "./pages/ChoirPage";
import PastorsNetworkPage from "./pages/PastorsNetworkPage";
import WidowsElderlyCarePage from "./pages/WidowsElderlyCarePage";
import ChildrensChurchPage from "./pages/ChildrensChurchPage";
import ChurchPlantingPage from "./pages/ChurchPlantingPage";
import PrayerRequestsPage from "./pages/PrayerRequestsPage";
import TeachingSeriesPage from "./pages/TeachingSeriesPage";
// DreamyThemeShowcase is still used for styling references


function App() {
  return (
    <div className="flex flex-col min-h-screen dreamy-bg">
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
            <Route path="/choir" element={<ChoirPage />} />
            <Route path="/pastors-network" element={<PastorsNetworkPage />} />
            <Route path="/widows-elderly-care" element={<WidowsElderlyCarePage />} />
            <Route path="/childrens-church" element={<ChildrensChurchPage />} />
            <Route path="/church-planting" element={<ChurchPlantingPage />} />
            <Route path="/prayer-requests" element={<PrayerRequestsPage />} />
            <Route path="/teaching-series" element={<TeachingSeriesPage />} />
            {/* Add more routes as you create more pages */}
            <Route path="*" element={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
                  <p className="text-2xl text-gray-700 mb-6">Page Not Found</p>
                  <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Go Home
                  </Link>
                </div>
              </div>
            } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
