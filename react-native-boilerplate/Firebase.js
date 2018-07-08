import firebase from 'firebase/app';
import 'firebase/database';

const config = {
        // FIREBASE INFO
};
firebase.initializeApp(config);
export const database = firebase.database();
