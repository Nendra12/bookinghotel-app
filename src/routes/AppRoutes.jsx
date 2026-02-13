import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Hotels from "../pages/Hotels";
import HotelDetail from "../pages/HotelsDetail";
import Login from "../pages/Login";
import Booking from "../pages/Booking";
import MyBookings from "../pages/MyBookings";
import Register from "../pages/Register";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>Home</Route>
      <Route path="/hotels" element={<Hotels />}>Home</Route>
      <Route path="/hotels/:id" element={<HotelDetail />} ></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/booking/:id" element={<Booking />} />
      <Route path="/my-bookings" element={<MyBookings />} />
    </Routes>
  )
}

export default AppRoutes
