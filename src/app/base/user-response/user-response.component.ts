import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../../../app/auth.service';
import { MatPaginator } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-user-response',
  templateUrl: './user-response.component.html',
  styleUrls: ['./user-response.component.css']
})
  
export class UserResponseComponent implements OnInit {
  isLoading: boolean = false;
  
  public user_detail=[];
   displayedColumns: string[] = ['first_name', 'last_name', 'email', 'contact','resume','actions'];
   dataSource = new MatTableDataSource(this.user_detail);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: AuthService) { }
  
  ngOnInit() {
   this.isLoading = true
    this.service.applyJobs().subscribe(
      data => {
        console.log(data)
        this.user_detail = data.Data
         this.isLoading = false;
      }
    )
     this.dataSource.paginator = this.paginator;
  }
  //    applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  }