import { useState } from 'react'
import { Table, Spin, Tooltip, Button, Modal, Form, Input, Col, Row, InputNumber } from 'antd'
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import useGetProducts from '../hooks/useGetProducts'
import delProduct from '../helpers/deleteProduct'
import createProduct from '../helpers/createProduct'
import updateProduct from '../helpers/updateProduct'


const Products = () => {

  const [modalMode, setModalMode] = useState('create')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [productId, setProductId] = useState()
  const [secProduct, setSecProduct] = useState(1)

  const { data: products, isLoading } = useGetProducts(secProduct)

  const [form] = Form.useForm()


  const showModal = (record) => {
    setProductId(record.productId)
    setModalMode('update')
    setIsModalVisible(true)
    form.setFieldsValue(record)
  }

  const deleteProduct = (record) => {
    Modal.confirm(
      {
        title: `Confirmar`,
        content: `¿Está seguro de que desea borrar el producto ${record.name}?`,
        okText: 'Aceptar',
        cancelText: 'Cancelar',
        onOk: () => {
          const newProduct = delProduct(record.productId)
          console.log(newProduct)
          setSecProduct(secProduct + 1)
        }
      }
    )
  }

  const formSubmit = () => {
    form.submit()
  }

  const onFinish = (values) => {


    if (modalMode === 'create') {
      const newProduct = createProduct(values)
      console.log(newProduct)
      setSecProduct(secProduct + 1)
    } else {
      const newProduct = updateProduct({ productId, ...values })
      console.log(newProduct)
      setSecProduct(secProduct + 1)
    }
    setIsModalVisible(false)


  }

  const columns = [
    {
      title: 'Código',
      dataIndex: 'productId',
      key: 'productId',
      align: 'center',
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      key: 'description',
      align: 'center',
    },
    {
      title: 'Precio',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      render: (bookingValue) => {
        return bookingValue.toLocaleString('ES', {
          minimumFractionDigits: 2,
          useGrouping: true,
        })
      },
    },

    {
      title: 'Opciones',
      align: 'center',
      render: (_, record) => {
        return (
          <>
            <Tooltip title='Actualizar'>
              <Button
                onClick={() => showModal(record)}
                icon={<EditOutlined />}
                shape='round'
                type='primary'

              />
            </Tooltip>
            <Tooltip title='Eliminar'>
              <Button
                onClick={() => deleteProduct(record)}
                icon={<DeleteOutlined twoToneColor="#52c41a" />}
                shape='round'
                type='primary'

              />
            </Tooltip>
          </>
        )
      }
    }
  ]
  return (
    <>
      <Row justify='center'>
        <h2>Prueba Técnica Jose Suárez</h2>
      </Row>

      {
        isLoading ?
          <Spin />
          :
          <>
            <p>Catálogo de Productos</p>
            <Row gutter={[24, 24]} justify='center'>
              <Col>
                <Tooltip title='Añadir Producto'>
                  <Button
                    type='primary'
                    shape='circle'
                    size='large'
                    icon={<PlusOutlined />}
                    onClick={() => {
                      setModalMode('create')
                      form.resetFields()
                      setIsModalVisible(true)
                    }}
                    style={{
                      marginBottom: '10px'
                    }}
                  />
                </Tooltip>
              </Col>
            </Row>
            <Table
              dataSource={products}
              columns={columns}
            />
          </>

      }
      <Modal
        title={modalMode === 'create' ? 'Crear Nuevo Producto' : 'Actualizar Información del Producto'}
        visible={isModalVisible}
        onOk={() => formSubmit()}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form
          form={form}
          layout={'vertical'}
          onFinish={onFinish}
        >
          <Col xs={24} md={24}>
            <Form.Item
              name='name'
              label='Nombre'
              rules={[{ required: true, message: 'El nombre del producto es obligatorio' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={24}>
            <Form.Item
              name='description'
              label='Descripción'
              rules={[{ required: true, message: 'La descripción del producto es obligatorio' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={24}>
            <Form.Item
              name='price'
              label='Precio'
              rules={[{ required: true, message: 'El precio del producto es obligatorio' }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
        </Form>
      </Modal>
    </>
  )
}

export default Products