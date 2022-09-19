import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import Iuser from '../models/user.models';
import { delay,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private UserCollection :AngularFirestoreCollection<Iuser>
public isAuthenticated$ : Observable<boolean>
public isAuthenticatedwithDelay$ : Observable<boolean>
  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore
    ) { 
      this.UserCollection=db.collection('users')
      this.isAuthenticated$=auth.user.pipe(
        map(user=>!!user)
      )
      this.isAuthenticatedwithDelay$ = this.isAuthenticated$.pipe(
        delay(1000)
      )
    }

 public async createuser(userData:Iuser){
    if(!userData.password){
      throw new Error('Password Required')
    }
      const userCre = await this.auth.createUserWithEmailAndPassword(
        userData.email, userData.password
        )

        if(!userCre.user){
          throw new Error("User not found")
        }
      
      await this.UserCollection.doc(userCre.user.uid).set({
        name:userData.name,
        email:userData.email,
        age:userData.age,
        phoneno:userData.phoneno
      })

      await userCre.user.updateProfile({
        displayName:userData.name
      })
    }
}
