import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Home
import Home from './pages/Home';

// About Us
import Overview from './pages/AboutUs/Overview';
import VisionMission from './pages/AboutUs/VisionMission';
import CEOMessage from './pages/AboutUs/CEOMessage';
import Clients from './pages/Clients';

// Products
import VIPs from './pages/Products/VIPs';
import LawInForces from './pages/Vehicles/LawInForces';
import MultiPurpose from './pages/Vehicles/MultiPurpose';
import GuardPost from './pages/Vehicles/GuardPost';
import CashAndTransit from './pages/Vehicles/CashAndTransit';
import BallisticStandardsChart from './pages/Technology/BallisticStandardsChart';

// Technology
import OpaqueArmor from './pages/Technology/OpaqueArmor';
import TransparentArmor from './pages/Technology/TransparentArmor';
import Suspension from './pages/Technology/Suspension';
import Brakes from './pages/Technology/Brakes';
import FloorProtection from './pages/Technology/FloorProtection';
import Hinges from './pages/Technology/Hinges';
import RunFlatTires from './pages/Technology/RunFlatTires';
import EngineProtection from './pages/Technology/EngineProtection';
import Benefits from './pages/Technology/Benefits';

// Other Pages
import Media from './pages/Media';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* About Us */}
            <Route path="/about" element={<Overview />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/ceo-message" element={<CEOMessage />} />
            <Route path="/about/clients" element={<Clients />} />

            {/* Products */}
            <Route path="/products" element={<VIPs />} />
            <Route path="/products/law-in-forces" element={<LawInForces />} />
            <Route path="/products/multi-purpose" element={<MultiPurpose />} />
            <Route path="/products/guard-post" element={<GuardPost />} />
            <Route path="/products/cash-and-transit" element={<CashAndTransit />} />
            <Route path="/products/standards-chart" element={<BallisticStandardsChart />} />

            {/* Technology */}
            <Route path="/technology/opaque-armor" element={<OpaqueArmor />} />
            <Route path="/technology/transparent-armor" element={<TransparentArmor />} />
            <Route path="/technology/suspension" element={<Suspension />} />
            <Route path="/technology/brakes" element={<Brakes />} />
            <Route path="/technology/floor-protection" element={<FloorProtection />} />
            <Route path="/technology/hinges" element={<Hinges />} />
            <Route path="/technology/run-flat-tires" element={<RunFlatTires />} />
            <Route path="/technology/engine-protection" element={<EngineProtection />} />
            <Route path="/technology/benefits" element={<Benefits />} />

            {/* Other Pages */}
            <Route path="/media" element={<Media />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
