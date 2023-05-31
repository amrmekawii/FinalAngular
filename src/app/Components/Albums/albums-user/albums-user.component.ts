import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMinpulService } from 'src/app/Services/user-minpul.service';

@Component({
  selector: 'app-albums-user',
  templateUrl: './albums-user.component.html',
  styleUrls: ['./albums-user.component.css']
})
export class AlbumsUserComponent implements OnInit {
  ID = 0;
  user: any;
  album: any;
  photos: any[] = [];
  poto: any;


  constructor(myRoute: ActivatedRoute, public myService: UserMinpulService, private router: Router) {
    this.ID = myRoute.snapshot.params["id"];

  }

  ngOnInit(): void {
    this.myService.GetUserByID(this.ID).subscribe(
      {
        next: (data) => {
          console.log(data)
          this.user = data;

        },
        error: (err) => { console.log(err) }
      }
    )



    //album and count photo in all album 8///


    this.myService.GetAlbumByID(this.ID).subscribe(

      {
        next: (data) => {
          //  console.log(data)
          this.album = data;
          // console.log(this.album.length)
          for (let i = 0; i < this.album.length; i++) {

            //  console.log(this.album[i]['id'])

            this.myService.GetPhotoByID(this.album[i]['id']).subscribe({
              next: (data) => {
               // console.log(data)
                this.poto = data;
                this.photos.push(this.poto.length)

              }

            });
          }

        },
        error: (err) => { console.log(err) }
      }

    );




  }



}
