import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { CreditBillComponent } from './credit-bill/credit-bill.component';

const routes: Routes = [
    { path: 'product', component: ProductComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'credit-bill', component: CreditBillComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class ShoppingRoutingModule {}

