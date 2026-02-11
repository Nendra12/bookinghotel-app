import hotels from "../datas/hotels";
export const getAllHotels = () => {
  return hotels
}

export const getHotelsById = (id) => {
  return hotels.find((h) => h.id === Number(id))
}
