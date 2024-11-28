import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
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
import { CanDeactivateGuard } from './guard/can-deactivate.guard';
import { AppServerModule } from './app.module.server';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    EmployeesLstComponent,
    EmployeesDetailsComponent,
    ProductsComponent,
    TshirtsComponent,
    TrousersComponent,
    HalfsleevetshirtComponent,
    FullsleevetshirtComponent,
    CoursesComponent,
    CoursesDetailsComponent,
    CoursesDetails2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // RouterModule.forRoot([]),


  ],
  providers: [
    provideClientHydration(),
    [
    AuthGuard,
    adminGuard,
    CanDeactivateGuard
    ]
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
