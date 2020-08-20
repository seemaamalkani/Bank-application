import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ProductComponent } from './product/product.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditBillComponent } from './credit-bill/credit-bill.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShoppingComponent, ProductComponent, PaymentComponent, CreditBillComponent]
})
export class ShoppingModule { }
