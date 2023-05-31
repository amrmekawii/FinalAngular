import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/Users/users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { AlbumsUserComponent } from './Components/Albums/albums-user/albums-user.component';
import { PhotosComponent } from './Components/Photos/photos/photos.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumsUserComponent,
    PhotosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
