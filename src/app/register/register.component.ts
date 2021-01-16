import { Component} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
// export class RegisterComponent {

// isLoading = false;
//    error: string = null;
//   constructor(private http:HttpClient) { }
//   onRegister(postData: NgForm) {
//     this.isLoading = true;
//     this.http
//       .post<any>('https://jobsearchportal.azurewebsites.net/user/RegisterAPI/', {
//         Name:postData.value.Name,
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
export class RegisterComponent{
  registerUserData:any={}
  constructor(private _auth:AuthService,private _router:Router) { }
  registerUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res=> this._router.navigate(['/dashboard']),
        err=>console.log(err)
    )
  }
}