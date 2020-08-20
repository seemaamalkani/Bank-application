import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import {AbstractControl} from '@angular/forms';
import {UserdataService} from './userdata.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AgmCoreModule } from '@agm/core';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    TransactionComponent,
    LoanhistoryComponent,
    LoanComponent,
    ShoppingComponent,
    ProductComponent,
    PaymentComponent,
    BillComponent,
    TransferComponent,
    FixedDepositComponent,
    CreditBillComponent,
    GenratebillComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyADij8Ja__YW8eWbZVM-Il7mmDqIMCl_zY'
    }),
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
