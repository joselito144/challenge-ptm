import PRODUCTAPI from "../api/productApi"
import { notification } from 'antd'


const createProduct = async (request) => {
  const result = await PRODUCTAPI()
    .post(`products/save`, request)
    .catch((error) => {
      return error.response ? error.response : error
    })


  if (result.status !== 201) {
    notification.error({
      message: 'Error',
      description: 'No fue posible crear el producto',
      placement: 'bottomRight',
    })
    return {}
  }
  return result.data
}

export default createProduct