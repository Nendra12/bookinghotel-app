import api from "./api"

export const getAllHotels = async () => {
  const res = await api.get("/hotels")
  return res.data
}

export const getHotelsById = async (id) => {
  const res = await api.get(`/hotels/${id}`)
  return res.data
}
