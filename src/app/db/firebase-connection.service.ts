import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Connection } from './connection';
import { IreckonuEvent } from '../data-models/ireckonu-event';

@Injectable()
export class FirebaseConnectionService implements Connection {

  constructor(public db: AngularFirestore) {
  }

  getData(): Observable<IreckonuEvent[]> {
    return this.db.collection('items').valueChanges();
  }

  getItem(id: string): Observable<IreckonuEvent> {
    return new Observable( (observable) => {
      this.db.collection('items').ref.where('id', '==', id).get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          observable.next(doc.data());
        });
      })
      .catch(error => {
        console.error(error);
        observable.error(error);
      });
    });
  }
}
