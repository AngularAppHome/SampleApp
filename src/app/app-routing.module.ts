import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/About/app.about.component';
import { HomeComponent } from './pages/Home/app.home.component';
import { ServiceComponent } from './pages/Service/app.service.component';
import { PageNotFoundComponent } from './pages/pagenotfound';
import { SampleGridComponent } from './pages/sample-grid/sample-grid.component';
import { GridServiceService } from './services/grid.service';
import { AccordionComponent } from './pages/accordion/accordion.component';
import { EmployeesComponent } from './employees/employees.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'service/:id', component: ServiceComponent },
  { path: 'grid', component:SampleGridComponent},
  { path: 'accordion', component:AccordionComponent},
  { path: 'employees', component:EmployeesComponent},
  { path: '**', component: PageNotFoundComponent } 
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
