import app from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from './config';
import 'firebase/compat/auth';

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.db = app.firestore();
  }
}

const firebase = new Firebase();
const auth = app.auth();

export { auth };
export default firebase;
