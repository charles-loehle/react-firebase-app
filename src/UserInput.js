import React, { useState } from 'react';
import firebase from './firebase';
import './UserInput.css';

const UserInput = ({ user }) => {
  const [occupation, setOccupation] = useState(user.occupation);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection('users')
      .doc(user.id)
      .set({ ...user, occupation });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection('users')
      .doc(user.id)
      .delete();
  };

  return (
    <div className='UserInput'>
      <input
        value={occupation}
        onChange={e => {
          setOccupation(e.target.value);
        }}
      />
      <button className='btn-small waves-effect waves-light' onClick={onUpdate}>
        Update
      </button>
      <button className='btn-small waves-effect waves-light' onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default UserInput;
