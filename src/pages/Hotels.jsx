import { useState } from "react";
import HotelCard from "../components/HotelCards";
import { getAllHotels } from "../services/hotelServices";

function Hotels() {
  const hotels = getAllHotels()
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const fileredHotels = hotels.filter((hotel) => {
    return (
      hotel.name.toLowerCase().includes(search.toLowerCase()) &&
      hotel.location.toLowerCase().includes(location.toLowerCase()) &&
      (maxPrice === "" || hotel.price <= Number(maxPrice))
    );
  });
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Daftar Hotel</h1>

      <div className="bg-white p-4 rounded shadow mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Cari hotel..."
          className="border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="text"
          placeholder="Filter lokasi..."
          className="border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Harga maksimal"
          className="border p-2 rounded"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fileredHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

      {fileredHotels.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          Tidak ada hotel yang sesuai pencarian
        </p>
      )}
    </div>
  );
}

export default Hotels;
