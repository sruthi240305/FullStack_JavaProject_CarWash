import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import DashboardHeader from "./components/DashboardHeader";

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
import MyVehicles from "./pages/MyVehicles";
import PaymentMethods from "./pages/PaymentMethod";
import AddCard from "./pages/AddCard";
import EditProfile from "./pages/EditProfile";

import ForgotPassword from "./pages/ForgotPassword";
import ResetLinkSent from "./pages/ResetLinkSent";

import EmployeeDashboard from "./pages/Employee/EmployeeDashboard";
import EmployeeImpact from "./pages/Employee/EmployeeImpact";
import EmployeeTask from "./pages/Employee/EmployeeTask";
import EditCard from "./pages/Employee/EditCard";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import Settings from "./components/Settings";

function AppContent() {
  const location = useLocation();

  const publicRoutes = [
    "/",
    "/services",
    "/pricing",
    "/contact",
    "/login",
    "/signup",
  ];

  const showHeader = publicRoutes.includes(location.pathname);

  return (
    <>
      {showHeader ? <Header /> : <DashboardHeader />}

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
        <Route path="/my-vehicles" element={<MyVehicles />} />
        <Route path="/payment-methods" element={<PaymentMethods />} />
        <Route path="/add-card" element={<AddCard />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-link-sent" element={<ResetLinkSent />} />

        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/employee-impact" element={<EmployeeImpact />} />
        <Route path="/employee-task" element={<EmployeeTask />} />
        <Route path="/edit-card" element={<EditCard />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
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
