import { Link, useParams } from "react-router-dom";
import { getHotelsById } from "../services/hotelServices";
import { useEffect, useState } from "react";

function HotelDetail() {
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    try {
      getHotelsById(id).then((data) => setHotel(data.data));
    } catch (err) {
      setError("Hotel tidak di temukan")
    } finally {
      setLoading(false)
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p className="text-red-600">{error}</p>
  }

  if (!hotel) {
    return <h2>Hotel tidak ditemukan</h2>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{hotel.name}</h1>

      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-100 object-cover rounded"
      />

      <div className="mt-4">
        <p className="text-lg">Lokasi: {hotel.location}</p>

        <p className="text-yellow-500 mt-2">Rating: {hotel.rating}</p>

        <p className="text-2xl text-blue-600 font-bold mt-2">
          Rp {hotel.price}
        </p>

        <Link
          to={`/booking/${hotel.id}`}
          className="block text-center mt-4 bg-green-600 text-white px-6 py-2 rounded"
        >
          Booking Sekarang
        </Link>
      </div>
    </div>
  );
}

export default HotelDetail;
