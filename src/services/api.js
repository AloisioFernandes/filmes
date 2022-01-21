import axios from 'axios'

export const key = '589244a415b5355be4f23101e3d9f37f'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api