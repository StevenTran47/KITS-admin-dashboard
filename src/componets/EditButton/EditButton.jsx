// import "../../App.css"
// import React, { useState, useEffect } from "react";
// import { Button, Space, Table, Tag, Modal, Form, Input, Popconfirm, Typography, InputNumber } from 'antd';
// import { useDispatch, useSelector } from 'react-redux'


// const EditButton = () => {
//     const EditableCell = ({
//     editing,
//     dataIndex,
//     title,
//     inputType,
//     record,
//     index,
//     id,
//     children,
//     ...restProps
// }) => {
//     const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
//     return (
//         <td {...restProps}>
//             {editing ? (

//                 <Form.Item
//                     name={dataIndex}
//                     style={{
//                         margin: 0,
//                     }}
//                     rules={[
//                         {
//                             required: true,
//                             message: `Please Input ${title}!`,
//                         },
//                     ]}
//                 >
//                     {inputNode}
//                 </Form.Item>
//             ) : (
//                 children
//             )}
//         </td>
//     );
// };
// const [open, setOpen] = useState(false);
//   const showModal = () => {
//     setOpen(true);
//   };
//   const handleOk = () => {
//     setTimeout(() => {
//       setOpen(false);
//     }, 3000);
//   };

//   const handleCancel = () => {
//     setOpen(false);
//   };

// const [editingKey, setEditingKey] = useState('');
// const isEditing = (record) => record.id === editingKey;
// const edit = (record) => {
//     form.setFieldsValue({
//         name: '',
//         age: '',
//         address: '',
//         ...record,
//     });
//     setEditingKey(record.id);
// };
// const cancel = () => {
//     setEditingKey('');
// };

// const save = async (record) => {
//     try {
//         const row = await form.validateFields();
//         const newData = [...usersStore.listUser];
//         const index = newData.findIndex((item) => record.id === item.id);
//         if (index > -1) {
//             const item = newData[index];
//             newData.splice(index, 1, {
//                 ...item,
//                 ...row,
//             });
//             dispatch.users.setListUser(newData);
//             setEditingKey('');
//         } else {
//             newData.push(row);
//             dispatch.users.setListUser(newData);
//             setEditingKey('');
//         }
//     } catch (errInfo) {
//         console.log('Validate Failed:', errInfo);
//     }
// };
// const mergedColumns = columns.map((col) => {
//     if (!col.editable) {
//         return col;
//     }
//     return {
//         ...col,
//         onCell: (record) => ({
//             record,
//             inputType: col.dataIndex === 'age' ? 'number' : 'text',
//             dataIndex: col.dataIndex,
//             title: col.title,
//             editing: isEditing(record),
//         }),
//     };
// });
//     return (
//         <Space>
//             <Button type="primary" onClick={showModal}>
//                 Edit users
//             </Button>
//             <Modal
//                 open={open}
//                 title="Edit User"
//                 onOk={handleOk}
//                 onCancel={handleCancel}
//                 footer={null}
//             >
//                 <Form
//                     form={form}
//                     name="validateOnly"
//                     layout="vertical"
//                     autoComplete="off"


//                 >
//                     <Form.Item
//                         name="name"
//                         label="Name"
//                         rules={[
//                             {
//                                 required: true,
//                             },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>
//                     <Form.Item
//                         name="username"
//                         label="Username"
//                         rules={[
//                             {
//                                 required: true,
//                             },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>
//                 </Form>
//             </Modal>
//         </Space>
//     );
// }
// export default EditButton;