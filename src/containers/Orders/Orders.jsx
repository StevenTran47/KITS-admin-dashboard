import "../../App.css"
import React, { useState, useEffect } from "react";
import { Button, Space, Table, Modal, Form, Input, Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Add Product
    </Button>
  );
};

const Orders = () => {
  const productsStore = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.products.fetchProducts();
  }, [])


  const [form] = Form.useForm();


  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const onFinish = (product) => {
    const newData = [...productsStore.listProduct, {
      key: Math.floor(Math.random() * 10000) + 1,
      title: product.title,
      price: product.price
    }]
    dispatch.products.setListProduct(newData);
    setOpen(false);
  }

  const handleDelete = (record) => {
    const newData = productsStore.listProduct.filter((item) => record.id !== item.id);
    dispatch.products.setListProduct(newData);
  };


  const columns = [
    {
      title: "Orders",
      dataIndex: "title",
      key: "title",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      key: "category",
      dataIndex: "category",
    },

    {
      title: 'Delete Action',
      dataIndex: 'operation',
      render: (_, record) => (
        <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record)}>
          <a>Delete</a>
        </Popconfirm>
      )
    },



  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        // editing: isEditing(record),
      }),
    };
  });
  
    return (
      <div className="content">
        <div className="orders-section">
          <h1>Orders management</h1>
          <Space>
            <Button type="primary" onClick={showModal}>
              Add orders
            </Button>
          </Space>
          <Modal
            open={open}
            title="Add Orders"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <Form
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
              onFinish={onFinish}

            >
              <Form.Item
                name="title"
                label="Orders"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="price"
                label="Price"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Space>
                  <SubmitButton form={form} />
                  <Button htmlType="reset">Reset</Button>
                </Space>
              </Form.Item>
            </Form>
          </Modal>
          <Table
            columns={mergedColumns}
            dataSource={productsStore.listProduct} />
        </div>
      </div>
    );
  }
export default Orders;