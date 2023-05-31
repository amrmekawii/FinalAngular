import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserMinpulService {

  constructor(private readonly myClient:HttpClient) { }

//  private  Base_URL = "https://jsonplaceholder.typicode.com/users";
     private readonly Base_URL = "http://localhost:3000/users";
     private readonly Base_URL_album = "http://localhost:3000/albums?userId=";
     private readonly Base_URL_photo = "http://localhost:3000/photos?albumId=";

  users:any;

  
  GetAllUsers(){
this.users =this.myClient.get(this.Base_URL) ;

    return   this.myClient.get(this.Base_URL) ;
  }

  GetUserByID(id:any){
    return this.myClient.get(this.Base_URL+"/"+id);
  }

  AddUser(newUser:any){

    return this.myClient.post(this.Base_URL, newUser);

  }

  UpdateUser(id:any ,newUser:any){
console.log(newUser)
console.log(id)
    return this.myClient.put(this.Base_URL+"/"+id,newUser)

  }

  DeleteUser(id:any){
return this.myClient.delete(this.Base_URL+"/"+id)
  }


 


  GetAlbumByID(id:any){
    return this.myClient.get(this.Base_URL_album+id);

  }


  GetPhotoByID(id:any){
    return this.myClient.get(this.Base_URL_photo+id);
  }



}