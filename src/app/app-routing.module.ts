import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { UserResponseComponent } from './base/user-response/user-response.component';
import { PostJobsComponent } from './base/post-jobs/post-jobs.component';
import { JobOpeningsComponent } from './base/job-openings/job-openings.component';
import { RegisterComponent } from './register/register.component';
import { BaseComponent } from './base/base.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },      
    { path: 'register', component: RegisterComponent },
    {
        path: 'dashboard', component: BaseComponent, children: [
          { path: '', component: JobOpeningsComponent },
          { path: 'job-opening', component: JobOpeningsComponent }, 
          { path: 'post-jobs', component: PostJobsComponent }, 
          { path: 'user-response', component: UserResponseComponent },
     ] }, 
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],//configured
    exports: [RouterModule]
})
    
export class AppRoutingModule{

}