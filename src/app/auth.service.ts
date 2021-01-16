import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
  
export class AuthService {
  private _registerUrl = "https://jobsearchportal.azurewebsites.net/user/RegisterAPI/";
  private _loginUrl = " https://jobsearchportal.azurewebsites.net/user/Login/"; 
  private _postJobsUrl = "https://jobsearchportal.azurewebsites.net/vacancy/VacancyAPI/";

  constructor(private http: HttpClient) { }
  
  registerUser(user) {
   return this.http.post<any>(this._registerUrl,user)
  }

  loginUser(user) {
     return this.http.post<any>(this._loginUrl,user)
  }

  postJobs(user) {
    return this.http.post<any>(this._postJobsUrl,user)
  }

  public applyJobs() {
     return this.http.get<any>("https://jobsearchportal.azurewebsites.net/vacancy/ApplyAPI/");
  }

   deleteVacancy(Designation){
    return this.http.delete("https://jobsearchportal.azurewebsites.net/vacancy/VacancyAPI/",Designation);
  }

}
