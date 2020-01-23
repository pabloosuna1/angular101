import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendsListComponent } from './shared/components/friends-list/friends-list.component';
import { FriendAddComponent } from './pages/friend-add/friend-add.component';


const routes: Routes = [

  {path: '', component: FriendsListComponent},
  {path: 'add', component: FriendAddComponent},
  {path: '**', component: FriendsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
