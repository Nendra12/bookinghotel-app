import { Link } from "react-router-dom"

function HotelCard({ hotel }) {
  return (
    <div className="border rounded-lg shadow bg-white overflow-hidden">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">
          {hotel.name}
        </h2>

        <p className="text-gray-600">
          {hotel.location}
        </p>

        <p className="text-yellow-500 mt-1">
          Rating: {hotel.rating}
        </p>

        <p className="text-blue-600 font-bold mt-2">
          Rp {hotel.price.toLocaleString()}
        </p>

        <Link to={`/hotels/${hotel.id}`} className="block text-center mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" >
          Lihat Detail
        </Link>
      </div>
    </div>
  )
}

export default HotelCard
