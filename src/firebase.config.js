import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCd39nuKvoL_aTPCPJmn8HxX7-YAMUs1Ak',
  authDomain: 'house-marketplace-app-8d132.firebaseapp.com',
  projectId: 'house-marketplace-app-8d132',
  storageBucket: 'house-marketplace-app-8d132.appspot.com',
  messagingSenderId: '313543613217',
  appId: '1:313543613217:web:d28cf171dcd07b1ca5fc60',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
