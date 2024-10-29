import axios from "axios"

const api = axios.create({
  baseURL: "https://my-backend-bjo3.onrender.com",
})

export const getExampleData = async () => {
  try {
    const response = await api.get("/")
    return response.data
  } catch (error) {
    console.error(error)
  }
}
