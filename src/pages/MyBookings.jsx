import { useEffect, useState } from "react"
import { getBookings, removeBooking } from "../services/bookingServices"

function MyBookings() {
  const [ bookings, setBookings ] = useState([])

  useEffect(() => {
    getBookings().then(data => setBookings(data.data))
  }, [])

  const handleRemove = async (id) => {
    console.log(id)
    await removeBooking(id)
    getBookings().then(data => setBookings(data.data))
    alert("Data berhasil di hapus")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 && (
        <p>Belum ada booking</p>
      )}

      {bookings.map((booking) => (
        <div key={booking.id} id={booking.id} className="border p-4 mb-4 rounded">
          <h2 className="font-bold">{booking.hotelName}</h2>
          <p>Check In: {booking.checkIn}</p>
          <p>Check Out: {booking.checkOut}</p>

          <button
            onClick={() => handleRemove(booking.id)}
            className="mt-2 text-red-600"
          >
            Batalkan
          </button>
        </div>
      ))}
    </div>
  )
}

export default MyBookings
