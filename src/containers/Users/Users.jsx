import "../../App.css"
import EditButton from "../../componets/EditButton/EditButton";
import React, { useState, useEffect } from "react";
import { Button, Space, Table, Tag, Modal, Form, Input, Popconfirm, Typography, InputNumber } from 'antd';
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
      Add User
    </Button>
  );
};


const Users = () => {
  const usersStore = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.users.fetchUsers();
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

  
  const onFinish = (user) => {
    const newData = [...usersStore.listUser, {
      key: Math.floor(Math.random() * 10000) + 1,
      name: user.name,
      username: user.username,
    }]
    dispatch.users.setListUser(newData);
    setOpen(false);
  }

  const handleDelete = (record) => {
    const newData = usersStore.listUser.filter((item) => record.id !== item.id);
    dispatch.users.setListUser(newData);
  };


  
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email;",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
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
 
  return (
    <div className="content">
      <div className="users-section">
        <h1>Users management</h1>
        <Space>
          <Button type="primary" onClick={showModal}>
            Add users
          </Button>

        </Space>
        <Modal
          open={open}
          title="Add User"
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
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="username"
              label="Username"
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
          columns={columns}
          dataSource={usersStore.listUser} />
      </div>
    </div>

  );
};
export default Users;