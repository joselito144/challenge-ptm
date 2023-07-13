import PRODUCTAPI from "../api/productApi"
import { notification } from 'antd'

const updateProduct = async (request) => {
  const result = await PRODUCTAPI()
    .put(`products/update`, request)
    .catch((error) => {
      return error.response ? error.response : error
    })


  if (result.status !== 200) {
    notification.error({
      message: 'Error',
      description: 'No fue posible actualizar el producto',
      placement: 'bottomRight',
    })
    return {}
  }
  return result.data
}

export default updateProduct