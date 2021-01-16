import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { UserResponseComponent } from './base/user-response/user-response.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PostJobsComponent } from './base/post-jobs/post-jobs.component';
import { JobOpeningsComponent } from './base/job-openings/job-openings.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './shared/spinner.component';
import { AuthService } from './auth.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    UserResponseComponent,
    PostJobsComponent,
    JobOpeningsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    SpinnerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
     NgbModule
  ],
  // providers: [AuthService,AuthGuard],
  providers: [AuthService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
