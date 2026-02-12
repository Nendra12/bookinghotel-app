import { useContext, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getHotelsById } from "../services/hotelServices"
import { AuthContext } from "../context/AuthContext"
import { createBooking } from "../services/bookingServices"

function Booking() {
  const [hotel, setHotel] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getHotelsById(id).then(data => setHotel(data.data))
  }, [])

  const { user } = useContext(AuthContext)

  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [user, navigate])

  const handleBooking = async (e) => {
    e.preventDefault()

    const newBooking = {
      id: Date.now(),
      hotelName: hotel.name,
      checkIn,
      checkOut
    }

    await createBooking(newBooking)

    alert("Booking berhasil!")

    navigate("/my-bookings")
  }

  return (

    <div className="w-full p-2 h-105 flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${hotel.image})`}}>
      <div className="max-w-lg  bg-white p-6 rounded shadow" >
        <h1 className="text-2xl font-bold mb-4">
          Booking: {hotel.name}
        </h1>

        <form onSubmit={handleBooking}>
          <div className="mb-4">
            <label>Check In</label>
            <input
              type="date"
              className="border p-2 w-full"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label>Check Out</label>
            <input
              type="date"
              className="border p-2 w-full"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>

          <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
            Konfirmasi Booking
          </button>
        </form>
      </div>
    </div>
  )
}

export default Booking
