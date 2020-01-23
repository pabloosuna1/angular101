import { Injectable } from '@angular/core';
import { Friend } from '../models/friend.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  friends: Array<string>;

  constructor(private http: HttpClient) {
      this.friends = ['Ana', 'Santiago', 'Marcos', 'Jorge'];
   }

   getFriends(): Array<string> {
     return this.friends;
   }

   getHttpFriends(){
     return this.http.get('http://angular101.jelastic.labs.gmv.com/api/v1/users')
     .toPromise().then(data => data as Friend[]);
   }

   addFriend(name: string){
     this.friends.push(name);
     console.log(this.friends);
   }
}
