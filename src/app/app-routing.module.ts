import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './Components/Users/users/users.component';
import { AlbumsUserComponent } from './Components/Albums/albums-user/albums-user.component';
import { PhotosComponent } from './Components/Photos/photos/photos.component';

const routes: Routes = [
  {path:'',component:UsersComponent},
  {path:'users', component:UsersComponent},
  {path:'album/:id', component:AlbumsUserComponent},
  {path:'photos/:idUser/:idAlbum', component:PhotosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
