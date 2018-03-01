import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
 
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/datatable';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { DataGridModule } from 'primeng/datagrid';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/About/app.about.component';
import { HomeComponent } from './pages/Home/app.home.component';
import { ServiceComponent } from './pages/Service/app.service.component';
import { PageNotFoundComponent } from './pages/pagenotfound';
import { SampleGridComponent } from './pages/sample-grid/sample-grid.component';
import { GridServiceService } from './services/grid.service';
import { AccordionComponent } from './pages/accordion/accordion.component';
import { environment } from '../environments/environment';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';



@NgModule({
  declarations: [
    AppComponent, 
    AboutComponent,
    HomeComponent,
    ServiceComponent,
    PageNotFoundComponent,
    SampleGridComponent,
    AccordionComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [GridServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
