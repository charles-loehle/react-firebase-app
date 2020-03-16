import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from './firebase';
import UserInput from './UserInput';
import CreateUserForm from './CreateUserForm';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // connect to the database
    const db = firebase.firestore();
    // get data from database
    return db.collection('users').onSnapshot(snapshot => {
      const userData = [];
      snapshot.forEach(doc => userData.push({ ...doc.data(), id: doc.id }));
      setUsers(userData);
    });
  }, []);

  return (
    <div className='App container'>
      <CreateUserForm />
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4>Users</h4>
        </li>
        {users.map(user => (
          <li className='collection-item avatar' key={user.id}>
            <span className='title'>
              Name: {user.firstName} {user.lastName}
            </span>
            <p>Occupation: {user.occupation}</p>
            <UserInput user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
