import { JsonConnectionService } from '../app/db/json-connection.service';
import { FirebaseConnectionService } from '../app/db/firebase-connection.service';

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyBwx7kHmDQswrbMSong0e54bJqbadOKxdk',
    authDomain: 'ireckonu-62f03.firebaseapp.com',
    databaseURL: 'https://ireckonu-62f03.firebaseio.com',
    projectId: 'ireckonu-62f03',
    storageBucket: 'ireckonu-62f03.appspot.com',
    messagingSenderId: '212315040537'
  },
  db: FirebaseConnectionService
  // db: JsonConnectionService
};
