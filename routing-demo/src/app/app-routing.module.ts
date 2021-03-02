import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Here we configure all the routes possible in our application
//NOTE: the path which we specify here for each component will be taken as for the 
//navigation
const routes: Routes = [
  //The router tries to match the paths from the top to the entire list
  //Hence, The wild-card route should be the last one in the list
  //1. pathMatch : 'prefix' says that if the URL is having a prefix of the path which is specified
  //2. pathMatch : 'full' says that if the URL is fully matching
  {path: '', redirectTo:'/departments-list', pathMatch:'full'},
  {path: 'departments-list', component: DepartmentListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {
    path: 'departments-list/:id',
    component: DepartmentDetailComponent,
    children: [
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent}
    ]
  },
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//This constant we are defining to contain all the Routing Components and then we import it in the appModule
//Rather then importing each component seperately
export const routingComponents = [DepartmentListComponent, 
                                  EmployeeListComponent,
                                  PageNotFoundComponent, 
                                  DepartmentListComponent,
                                  DepartmentOverviewComponent,
                                  DepartmentContactComponent];
