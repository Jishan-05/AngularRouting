import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate, CanActivateChild } from '@angular/router';
import path from 'path';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesLstComponent } from './employees-lst/employees-lst.component';
import { EmployeesDetailsComponent } from './employees-details/employees-details.component';
import { ProductsComponent } from './products/products.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { TrousersComponent } from './trousers/trousers.component';
import { HalfsleevetshirtComponent } from './halfsleevetshirt/halfsleevetshirt.component';
import { FullsleevetshirtComponent } from './fullsleevetshirt/fullsleevetshirt.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesDetails2Component } from './courses-details-2/courses-details-2.component';
import { AuthGuard } from './auth.guard';
import { adminGuard } from './guard/admin.guard';

const routes: Routes = [

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home',component : HomeComponent},
    {path: 'about',component : AboutComponent},
    {path: 'contact', component : ContactComponent},
    {
      path :'employees',
      component:EmployeesLstComponent,
      canActivate : [AuthGuard]
    },
    // {path : 'employees/:id/:name',component:EmployeesDetailsComponent},
    {path : 'employees/:id',component:EmployeesDetailsComponent},
    {
      path : 'products',
      component:ProductsComponent,
      canActivateChild : [adminGuard],
      children :[
        {
          path:'tshirts',
          component:TshirtsComponent,
          children :[
            {path:'halfsleevetshirt',component: HalfsleevetshirtComponent},
            {path:'fullsleevetshirt',component: FullsleevetshirtComponent},

          ]
        },
        {path:'trousers',component:TrousersComponent}
      ]
    },
    {path:'courses',component: CoursesComponent},
    {
      path : 'courseDetails',
      outlet : 'course_details',
      component:CoursesDetailsComponent,

    },
    {
      path : 'courseDetails2',
      outlet : 'course_details2',
      component:CoursesDetails2Component,

    },
    {path: '**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
