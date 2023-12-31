import { FB_CLIENT_EMAIL, FB_PRIVATE_KEY, FB_PROJECT_ID } from '$env/static/private';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import pkg from 'firebase-admin';

try {
	pkg.initializeApp({
		credential: pkg.credential.cert({
			projectId: FB_PROJECT_ID,
			clientEmail: FB_CLIENT_EMAIL,
			privateKey: FB_PRIVATE_KEY
		})
	});
} catch (error) {
	if (!(error instanceof Error)) {
		console.error('Something unexpected happened...');
		throw error;
	}
	if (!/already exists/u.test(error.message)) console.error('Firebase Admin Error: ', error.stack);
}

export const adminDb = getFirestore();
export const adminAuth = getAuth();
