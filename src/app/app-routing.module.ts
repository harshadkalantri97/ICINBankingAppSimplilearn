import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { RequestComponent } from './request/request.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PrimaryComponent } from './primary/primary.component';
import { SavingsComponent } from './savings/savings.component';
import { TransferComponent } from './transfer/transfer.component';
import {AdminavComponent} from './adminav/adminav.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { AdminrequestComponent } from './adminrequest/adminrequest.component';
import { DepositComponent } from './deposit/deposit.component';
import { HistoryComponent } from './history/history.component';
import { WithdrawlComponent } from './withdrawl/withdrawl.component';



const routes: Routes = [
  {path: '',redirectTo: "login", pathMatch: "full"},
  {path: 'registerpage', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'navbar', component: NavbarComponent, canActivate:[AuthGaurdService]},
  {path: 'request', component: RequestComponent, canActivate:[AuthGaurdService]},
  {path: 'myprofile', component: MyprofileComponent, canActivate:[AuthGaurdService]},
  {path: 'primary', component: PrimaryComponent, canActivate:[AuthGaurdService]},
  {path: 'savings', component: SavingsComponent, canActivate:[AuthGaurdService]},
  {path: 'transfer', component: TransferComponent, canActivate:[AuthGaurdService]},
  {path: 'adminportal',component: AdminavComponent},
{path:'viewusers',component:ViewusersComponent, canActivate:[AuthGaurdService]},
{path:'serverequest', component:AdminrequestComponent, canActivate:[AuthGaurdService]},
{path:'deposit', component:DepositComponent, canActivate:[AuthGaurdService]},
{path:'history', component:HistoryComponent, canActivate:[AuthGaurdService]},
{path:'withdrawl', component:WithdrawlComponent, canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
