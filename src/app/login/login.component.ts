import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export class LoginComponent {
//   isLoading = false;
//    error: string = null;
//   constructor(private http:HttpClient) {}

//   onLogin(postData: NgForm) {
//     this.isLoading = true;
//     this.http
//       .post<any>(' https://jobsearchportal.azurewebsites.net/user/Login/',{
//         Email: postData.value.Email,
//         password: postData.value.password
//       }
//       )
//       .subscribe(responseData => {
//         this.isLoading = false;
//         console.log(responseData);
//       },
//         errorMessage => {
//         console.log(errorMessage);
//         this.error = errorMessage;
//         this.isLoading = false;
//       }
//     );
//     postData.reset();
//  }
// }
export class LoginComponent{
  loginUserData:any = {}
  constructor(private _auth:AuthService,private _router:Router){}
  loginUser() {
     this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => this._router.navigate(['/dashboard']),
        err => console.log(err)
      )
  }
  // if(res.status == "success") { 
  //   //redirst to inner page
  // }
}