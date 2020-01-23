import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../../services/friends.service';
import { Friend } from '../../models/friend.model';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  friends: Array<string>;

  externalFriends: Array<Friend>;

  constructor(private friendService: FriendsService) { }

  ngOnInit() {
    this.friends = this.friendService.getFriends();

    this.friendService.getHttpFriends()
      .then( friends => {
        this.externalFriends = friends;
      })
      .catch(err => {
        console.error('Error');
      });
  }

}
