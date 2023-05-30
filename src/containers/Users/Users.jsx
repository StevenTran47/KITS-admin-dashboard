import "../../App.css"
import React from 'react';
import { useState } from 'react';
import Typography from "antd/es/typography/Typography";
import { Button, Space, Table, Tag, Modal, Form, Input, Select, } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'supervisor') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['admin'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['supervisor'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['super admin'],
  },
];
const newData = data.concat([{
  key: Math.floor(Math.random() * 10000) + 1,
  name: Users.name,
  age: Users.age,
  address: "afdasfgmdas;kfgmdal;kfm",
  tags: ["cool", "teacher"],
}]);

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const SubmitButton = ({ form }) => {
    const [submittable, setSubmittable] = React.useState(false);

    // Watch all values
    const values = Form.useWatch([], form);
    React.useEffect(() => {
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
          },
        );
    }, [values]);
    return (
      <Button type="primary" htmlType="submit" disabled={!submittable} onClick={newData}>
        Save
      </Button>
    );
  };
  const [form] = Form.useForm();
  
  return (
    <div className="content">
      <Space direction="vertical" >
        <Typography type="success">User Page</Typography>
        <Space direction="horizontal">
          <Button type="primary" onClick={showModal}>Add User</Button>
          <Modal
            open={open}
            title="Add Users"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <SubmitButton form={form}   />,
              <Button key="back" onClick={handleCancel}>
                Cancel
              </Button>,
            ]}
          >
            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
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
                name="age"
                label="Age"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Select">
                <Select>
                  <Select.Option value="demo">ADMIN</Select.Option>
                  <Select.Option value="super admin">SUPER ADMIN</Select.Option>
                  <Select.Option value="supervisor">SUPERVISOR</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Space>
                  <Button htmlType="reset">Reset</Button>
                </Space>
              </Form.Item>
            </Form>
          </Modal>
          <Button type="primary">Edit User</Button>
        </Space>
        
        <Table columns={columns} dataSource={data} />
      </Space>
    </div>
  );
}
export default Users;