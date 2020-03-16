import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAHtVA3Ir5BGb06LqyaswehYC_-kvEglqM',
  authDomain: 'fir-react-example-4d2ed.firebaseapp.com',
  databaseURL: 'https://fir-react-example-4d2ed.firebaseio.com',
  projectId: 'fir-react-example-4d2ed',
  storageBucket: 'fir-react-example-4d2ed.appspot.com',
  messagingSenderId: '423252645045',
  appId: '1:423252645045:web:260b18e9040898712ddafc'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
