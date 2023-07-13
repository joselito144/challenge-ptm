import PRODUCTAPI from "../api/productApi"


const getProducts = async () => {
  const result = await PRODUCTAPI()
    .get(`products/all`)
    .catch((error) => {
      return error.response ? error.response : error
    })


  if (result.status !== 200) {
    return {}
  }
  return result.data
}

export default getProducts