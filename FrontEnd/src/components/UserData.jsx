import React, { useEffect, useState } from 'react';
import { getReq } from '../api/axios'; // Assuming getReq is an axios GET request function
import { Table, Button, Modal } from 'antd'; // Using Ant Design's Modal component

const UserData = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // Store selected user data

  const getUsers = async () => {
    try {
      const res = await getReq('/admin-dashboard/users');
      console.log(res); 
      setData(res.data?.users);
    } catch (e) {
      console.log(e.message);
    }
  };
  const getData = async () => {
    try {
      const res = await getReq('/admin-dashboard/users/data');
      console.log(res); 
      // setData(res.data?.users);
    } catch (e) {
      console.log(e.message);
    }
  };


  const handleView = (user) => {
    setSelectedUser(user); // Store the selected user in state
    setIsModalOpen(true); // Open the modal
  };

  const handleDelete = (user) => {
    console.log('Delete', user); // Handle delete action
  };

  const handleOk = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Close the modal
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, user) => (
        <div>
          <Button onClick={() => handleView(user)} type="link">
            View
          </Button>
          <Button onClick={() => handleDelete(user)} type="link" danger>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getUsers(); // Fetch data on component mount
    // getData()
  }, []);

  return (
    <div>
      <Table dataSource={data} columns={columns} />

      {/* Conditionally render Ant Design Modal */}
      <Modal
        title="View User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedUser && (
          <div>
            <p><strong>Name:</strong> {selectedUser.username}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            {/* Add more fields as necessary */}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default UserData;

