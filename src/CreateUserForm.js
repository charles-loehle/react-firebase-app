import React, { useState } from 'react';
import uuid from 'uuid/v4';
import firebase from './firebase';
import './CreateUserForm.css';

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    occupation: '',
    id: ''
  });

  const { firstName, lastName, occupation } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection('users').add({
      firstName: firstName,
      lastName: lastName,
      occupation: occupation,
      id: uuid()
    });
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='CreateUserForm row'>
      <h3>CreateUserForm</h3>
      <form className='col s12' onSubmit={handleSubmit}>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={onChange}
              placeholder='First Name'
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={onChange}
              placeholder='Last Name'
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              type='text'
              name='occupation'
              value={occupation}
              onChange={onChange}
              placeholder='Occupation'
            />
          </div>
        </div>
        <button className='btn waves-effect waves-light'>Create</button>
      </form>
    </div>
  );
};

export default CreateUserForm;
