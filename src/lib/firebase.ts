import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import {
	FB_API_KEY,
	FB_APP_ID,
	FB_MEASUREMENT_ID,
	FB_MESSAGING_SENDER_ID
} from '$env/static/private';

const firebaseConfig = {
	apiKey: FB_API_KEY,
	authDomain: `${FB_APP_ID}.firebaseapp.com`,
	projectId: `${FB_APP_ID}`,
	storageBucket: `${FB_APP_ID}.appspot.com`,
	messagingSenderId: FB_MESSAGING_SENDER_ID,
	appId: FB_APP_ID,
	measurementId: FB_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
