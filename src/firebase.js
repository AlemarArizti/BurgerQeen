import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBgDmP6BJJKiuWeqHd-OoaAmfL8Ne6zwWQ',
  authDomain: 'burger-queen-11cd9.firebaseapp.com',
  projectId: 'burger-queen-11cd9',
  storageBucket: 'burger-queen-11cd9.appspot.com',
  messagingSenderId: '422151167204',
  appId: '1:422151167204:web:8dfbe9c952b564d085a0f1',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
