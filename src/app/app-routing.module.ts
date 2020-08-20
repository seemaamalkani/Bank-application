import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LoanhistoryComponent } from './loanhistory/loanhistory.component';
import { LoanComponent } from './loan/loan.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductComponent } from './shopping/product/product.component';
import { PaymentComponent } from './shopping/payment/payment.component';
import { BillComponent } from './bill/bill.component';
import { TransferComponent } from './transfer/transfer.component';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';
import { CreditBillComponent } from './shopping/credit-bill/credit-bill.component';
import { GenratebillComponent } from './genratebill/genratebill.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'menu', component: MenuComponent, canActivate:[AuthGuard]},
  { path: 'transaction', component: TransactionComponent, canActivate:[AuthGuard] },
  { path: 'loanhistory', component: LoanhistoryComponent , canActivate:[AuthGuard]},
  { path: 'loan', component: LoanComponent, canActivate:[AuthGuard] },
  { path: 'shopping', component: ShoppingComponent},
  { path:'product',component:ProductComponent},
  { path:'payment',component:PaymentComponent},
  { path:'bill',component:BillComponent, canActivate:[AuthGuard]},
  { path: 'transfer', component: TransferComponent , canActivate:[AuthGuard]},
  { path: 'fixed-deposit', component: FixedDepositComponent , canActivate:[AuthGuard]},
  { path:'credit-bill',component:CreditBillComponent},
  { path:'genratebill',component:GenratebillComponent, canActivate:[AuthGuard]},
  { path:'contact',component:ContactComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
