import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';

export default function Profile() {
  const [data, setData] = useState({ name: '', age: '', college: '', email: '', id: null });
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  const handleSubmit = () => {
    if (data.name && data.age && data.college && data.email) {
      const newUser = { ...data, id: Date.now() }
      setUsers([...users, newUser]);
      setData({ name: '', age: '', college: '', email: '', id: null });
      console.log(users);
    } else {
      alert('Please fill out all fields before submitting.');
    }
  };

  const handleEdit = (index) => {
    // const userToEdit = users.find(user => user.id === id);
    // setData({ ...userToEdit });
    console.log(index)
    const editedUser = users[index];
    console.log(editedUser)
    setData({ ...editedUser });
    console.log(data);
    setShowModal(true);
  };

  const handleSave = () => {
    // console.log(i);
    // console.log(data);
    // const updatedUsers = [...users];
    // const index = users.findIndex(user => user.name === i);
    // console.log(index)
    const updatedUsers = users.map(user => (user.id === data.id ? data : user));
    // updatedUsers[index] = data;
    // console.log(updatedUsers)
    setUsers(updatedUsers);
    // console.log(users)
    setData({ name: '', age: '', college: '', email: '', id: null });
    setShowModal(false);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((user, i) => i !== index);
    setUsers(updatedUsers);
    console.log(updatedUsers)
  };

  return (
  //   < className="form-container">
  //  <div className="form-inputs">
  //   <Form>
  //   <h2>Enter Student data</h2>
  //      <div className="form-group">
  //       <label htmlFor="name">Name:</label>
       
    
  //        <input placeholder='Enter your name' type='text' id='name' value={data.name} name="name" onChange={changeHandler} required></input>
  //      </div>
  //      <div className="form-group">
  //         <label htmlFor="age">Age:</label>
  //       <input placeholder='Enter your age' type='number' id='age' value={data.age} name="age" onChange={changeHandler} required></input>
  //      </div>
  //      <div className="form-group">
  //       <label htmlFor="college">College:</label>
  //       <input placeholder='Enter your College name' id='college' type='text' value={data.college} name="college" onChange={changeHandler} required></input>
  //      </div>
  //      <div className="form-group">
  //        <label htmlFor="email">email:</label>
  //        <input placeholder='Enter your email' id='email' type='text' value={data.email} name="email" onChange={changeHandler} required></input>
  //      </div>
  //       </Form>
  //     <Button onClick={handleSubmit}>Submit</Button>
  //    </div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Form>
            <h2>Enter Student data</h2>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={data.name}
                name="name"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                value={data.age}
                name="age"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group controlId="formCollege">
              <Form.Label>College</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your college"
                value={data.college}
                name="college"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group controlId="formemail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email"
                value={data.email}
                name="email"
                onChange={changeHandler}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </div>
        

        <div className="col-md-6">
          <h2>Student Data Table</h2>
          {/* React Bootstrap Table */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>College</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.college}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button variant="primary"  onClick={() => handleEdit(index)}>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(index)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        </div>
        {/* Modal for editing */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <h2>Enter Student data</h2>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input placeholder='Enter your name' type='text' id='name' value={data.name} name="name" onChange={changeHandler} required></input>
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input placeholder='Enter your age' type='number' id='age' value={data.age} name="age" onChange={changeHandler} required></input>
              </div>
              <div className="form-group">
                <label htmlFor="college">College:</label>
                <input placeholder='Enter your College name' id='college' type='text' value={data.college} name="college" onChange={changeHandler} required></input>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input placeholder='Enter your email' id='email' type='text' value={data.email} name="email" onChange={changeHandler} required></input>
              </div>
              <Button variant="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
      
      
  )
}