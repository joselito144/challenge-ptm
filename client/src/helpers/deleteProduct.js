import PRODUCTAPI from "../api/productApi"


const delProduct = async (productId) => {
  const result = await PRODUCTAPI()
    .delete(`products/${productId}`)
    .catch((error) => {
      return error.response ? error.response : error
    })


  if (result.status !== 200) {
    return {}
  }
  return result.data
}

export default delProduct