import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HelloComponent } from './shared/components/hello/hello.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RojoDirective } from './shared/directives/rojo.directive';
import { FriendsListComponent } from './shared/components/friends-list/friends-list.component';
import { FriendAddComponent } from './pages/friend-add/friend-add.component';
import { EfusivoPipe } from './shared/pipes/efusivo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HelloComponent,
    RojoDirective,
    FriendsListComponent,
    FriendAddComponent,
    EfusivoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
