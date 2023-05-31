import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMinpulService } from 'src/app/Services/user-minpul.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  ID = 0;
  users:any;
  user:any;
  udate: boolean = false;
  ADDa: boolean = false;
  ss = {
   "name": "Clementine Bauch",
    "email": "Nathan@yesenia.net",
    "phone":"01013666",
    "address": {
      "street": "Douglas Extension",
      
      }}
  

  display = "none";
  display33 = "none";
  display2 = "none";


  onCloseHandled() {
    this.display = "none";
    setTimeout(() => this.router.navigateByUrl(''), .5)

  }
  onCloseHandled2() {
    this.display2 = "none";
    setTimeout(() => this.router.navigateByUrl(''), .5)

  }
  onCloseHandled3() {
    this.display33 = "none";
    setTimeout(() => this.router.navigateByUrl(''), .5)

  }



  constructor(public myService:UserMinpulService , public router: Router){



    myService.GetAllUsers().subscribe(
      {
        next:(data)=>{
          console.log(data)
          this.users = data;
        },
        error:(err)=>{console.log(err)}
      }
    )
  }

AMR( x:any){
  this.display = "block";
this.ID =x;
console.log(x);
this.myService.GetUserByID(x).subscribe(
  {
    next: (data) => {
      console.log(data);
      this.user = data;


    },
    error: (err) => { console.log(err) }
  }
)
}


AMRDele(x :any){
  this.display2 = "block";
this.ID =x;
console.log(x);
}


AMR_ADD(x:any){
  this.display33 = 'block';








}


Update(name: any, email: any, phone: any, address: any) {
  let newUser = { name, email, phone, address };

  this.user["name"] = name;
  this.user["email"] = email;
  this.user["phone"] = phone;
  this.user["address"]["street"] = address;
  console.log("aaaaaaaa");
  console.log(this.user);
  console.log("aaaaaaaa");

  this.myService.UpdateUser(this.ID, this.user).subscribe();
  this.udate = true;
   setTimeout(() => this.router.navigateByUrl('users'), 2000)


}



 dele(){
  console.log(this.ID);
   this.myService.DeleteUser(this.ID).subscribe();
  setTimeout(() => this.router.navigateByUrl('/users'), 1000)


 }


 ADDuser(name:any,email:any,phone:any ,address:any ){
  let newUser = {name, email, phone ,address };
  console.log(newUser);

  this.ss["name"] = name;
  this.ss["email"] = email;
  this.ss["phone"] = phone;
  this.ss["address"]["street"] = address;


  this.myService.AddUser(this.ss).subscribe(

    {
      next: (data) => {
        console.log(data);
  
  
      },
      error: (err) => { console.log(err) }
    }

  );
  this.ADDa= true;

  setTimeout(() => this.router.navigateByUrl('users'), 2000)


}

}


