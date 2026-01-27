import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Dashboardheader from "./pages/DashboardHeader";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BookNow from "./pages/BookNow";
import BookNow2 from "./pages/BookNow2";
import BookNow3 from "./pages/BookNow3";
import BookNow4 from "./pages/BookNow4";
import Confirmation from "./pages/Confirmation";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ResetLinkSent from "./pages/ResetLinkSent";


function AppContent() {
  const location = useLocation();
  const isDashboardRoute = location.pathname === "/dashboard";

  return (
    <>
      {isDashboardRoute ? <Dashboardheader /> : <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/booknow2" element={<BookNow2 />} />
        <Route path="/booknow3" element={<BookNow3 />} />
        <Route path="/booknow4" element={<BookNow4 />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-link-sent" element={<ResetLinkSent />} />

      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
