import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ForgotComponent } from './forgot/forgot.component';
import { FooterComponent } from './footer/footer.component';
import { PipePipe } from './pipe.pipe';
import { AgGridModule } from 'ag-grid-angular';
import { AuthguardService } from './authguard.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ForgotComponent,
    FooterComponent,
    PipePipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: RegisterComponent },
      { path: 'login', component: LoginComponent, canActivate: [AuthguardService] },
      { path: 'forgot', component: ForgotComponent },
      { path: 'dashboard', component: DashboardComponent }
    ])
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
