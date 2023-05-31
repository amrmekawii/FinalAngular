import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMinpulService } from 'src/app/Services/user-minpul.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  user :any;
  photos:any;

  IDUser = 0;
  IDAlbum = 0;

  constructor(myRoute:ActivatedRoute,public myService:UserMinpulService,private router: Router){
    this.IDUser = myRoute.snapshot.params["idUser"];
    this.IDAlbum = myRoute.snapshot.params["idAlbum"];

    console.log(this.IDUser)
    console.log(this.IDAlbum)
  }

  ngOnInit(): void {
    this.myService.GetUserByID(this.IDUser).subscribe(
      {
        next:(data)=>{
          console.log(data)
          this.user = data;

        },
        error:(err)=>{console.log(err)}
      }
    )

    this.myService.GetPhotoByID(this.IDAlbum).subscribe(
      {
        next:(data)=>{
          this.photos = data;
          console.log(this.photos)


        },
        error:(err)=>{console.log(err)}
      }
    )

}

}




