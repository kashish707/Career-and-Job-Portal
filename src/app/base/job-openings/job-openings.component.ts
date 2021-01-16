import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { AuthService } from '../../../app/auth.service';

@Component({
  selector: 'app-job-openings',
  templateUrl: './job-openings.component.html',
  styleUrls: ['./job-openings.component.css']
})
export class JobOpeningsComponent implements OnInit {
  li:any; 
  lis = []; 
  isLoading: boolean = false;
  
  constructor(private http : HttpClient,private service:AuthService) { }

  ngOnInit(): void { 
   this.isLoading = true
   this.http.get(' https://jobsearchportal.azurewebsites.net/vacancy/VacancyAPI/') 
    //  this.http.get('http://www.mocky.io/v2/5ea172973100002d001eeada')   
    .subscribe(Response => { 
  
      // If response comes hideloader() function is called 
      // to hide that loader  
      // if(Response){   
      //   hideloader(); 
      // } 
      console.log(Response) 
      this.li=Response; 
      this.lis = this.li.Data; 
      this.isLoading = false;
    }); 
    // function hideloader(){ 
    //   document.getElementById('loading').style.display = 'none';} 
 }
  deleteVacancy(e) {
    this.service.deleteVacancy(e.Designation)
        .subscribe(response => {
          this.lis = this.lis.filter(item => item.Designation !== e.Designation);
        });
  }
    
  }
