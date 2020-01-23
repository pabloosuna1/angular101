import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FriendsService } from '../../shared/services/friends.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friend-add',
  templateUrl: './friend-add.component.html',
  styleUrls: ['./friend-add.component.css']
})
export class FriendAddComponent implements OnInit {

  addFriendForm: FormGroup;

  constructor(private router:Router, private formBuilder: FormBuilder, private friendsService: FriendsService) { }

  ngOnInit() {
    this.addFriendForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  onSubmit() {
    console.log(this.addFriendForm.value);
    this.friendsService.addFriend(this.addFriendForm.value.username);

    this.router.navigate(['/']);
    return false;
  }

}
