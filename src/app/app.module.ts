import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { RequestComponent } from './request/request.component';
import { PrimaryComponent } from './primary/primary.component';
import { SavingsComponent } from './savings/savings.component';
import { TransferComponent } from './transfer/transfer.component';
import { AdminavComponent } from './adminav/adminav.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { AdminrequestComponent } from './adminrequest/adminrequest.component';
import { DepositComponent } from './deposit/deposit.component';
import { HistoryComponent } from './history/history.component';
import { WithdrawlComponent } from './withdrawl/withdrawl.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    NavbarComponent,
    MyprofileComponent,
    RequestComponent,
    PrimaryComponent,
    SavingsComponent,
    TransferComponent,
    AdminavComponent,
    ViewusersComponent,
    AdminrequestComponent,
    DepositComponent,
    HistoryComponent,
    WithdrawlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
