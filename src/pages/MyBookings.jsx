import { useContext } from "react"
import { BookingContext } from "../context/BookingContext"

function MyBookings() {
  const { bookings, removeBooking } = useContext(BookingContext)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 && (
        <p>Belum ada booking</p>
      )}

      {bookings.map((booking) => (
        <div key={booking.id} className="border p-4 mb-4 rounded">
          <h2 className="font-bold">{booking.hotelName}</h2>
          <p>Check In: {booking.checkIn}</p>
          <p>Check Out: {booking.checkOut}</p>

          <button
            onClick={() => removeBooking(booking.id)}
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
