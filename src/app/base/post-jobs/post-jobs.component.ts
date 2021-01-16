import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-post-jobs',
  templateUrl: './post-jobs.component.html',
  styleUrls: ['./post-jobs.component.css']
})
// export class PostJobsComponent {
//   isLoading = false;
//    error: string = null;
//   constructor(private http:HttpClient) {}

//   onPost_job(postData: NgForm) {
//     this.isLoading = true;
//     this.http
//       .post<any>('https://jobsearchportal.azurewebsites.net/vacancy/VacancyAPI/ ',{
//         Designation: postData.value.Designation,
//         JobCategory: postData.value.JobCategory,
//         Qualification: postData.value.Qualification,
//         JobLocation: postData.value.JobLocation,
//         Salary: postData.value.Salary,
//         JobDescription: postData.value.JobDescription
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
export class PostJobsComponent{
 postJobsData:any = {}
  constructor(private _auth:AuthService){}
  postJobs() {
     this._auth.postJobs(this.postJobsData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}