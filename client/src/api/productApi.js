import axios from 'axios'


export const PRODUCTAPI = () => {
  
  let headers = {}
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_PRODUCTS,
    headers,
  })


  return instance
}

export default PRODUCTAPI
