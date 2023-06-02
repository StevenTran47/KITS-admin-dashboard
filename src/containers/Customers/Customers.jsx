import "../../App.css"
import "../../App.css"
import React, { useEffect } from "react";
import { Button, Space, Table, Form,} from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import Excel from "../../componets/Excel";

const Customers = () => {
  const usersStore = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.users.fetchUsers();
  }, [])


  const [form] = Form.useForm();
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
      }),
    };
  });
  return (
    <div className="content">
      <div className="customer -section">
        <h1>Customers  management</h1>
        <Space>
          <Excel
            fileName="export-user"
            data={[
              {
                columns: [
                  {
                    title: "User Id",
                    dataIndex: "id",
                    width: 5,
                  },
                  {
                    title: "Name",
                    dataIndex: "username",
                    width: 20,
                  },
                  {
                    title: "Email",
                    dataIndex: "email",
                    width: 50,
                  },
                ],
                data: usersStore.listUser,
                tabName: "info",
              },
              {
                columns: [
                  {
                    title: "Name",
                    dataIndex: "username",
                    width: 30,
                  },
                  {
                    title: "Phone",
                    dataIndex: "phone",
                    width: 30,
                  },
                ],
                data: usersStore.listUser,
                tabName: "contact",
              },
            ]}
          >
            <Button type="primary">Export users</Button>
          </Excel>
        </Space>
        <Table
          columns={mergedColumns}
          dataSource={usersStore.listUser} />
      </div>
    </div>
  );
}
export default Customers;