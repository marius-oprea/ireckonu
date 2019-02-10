import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseConnectionService } from './firebase-connection.service';
import { JsonConnectionService } from './json-connection.service';
import { environment } from '../../environments/environment';
import { DbService } from './db.service';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [FirebaseConnectionService, JsonConnectionService, DbService]
})
export class DbModule {
}
