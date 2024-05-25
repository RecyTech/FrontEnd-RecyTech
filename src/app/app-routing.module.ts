import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./public/components/auth/signin/signin.component";
import {SignupComponent} from "./public/components/auth/signup/signup.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {FormVenderProductoComponent} from "./ventas/pages/form-vender-producto/form-vender-producto.component";
import {PaymentMethodComponent} from "./public/components/payment-method/payment-method.component";
import {ProductInfoPageComponent} from "./public/pages/product-info-page/product-info-page.component";

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'signin', component: SigninComponent },
  { path:'signup', component: SignupComponent },
  { path:'ventas', component: FormVenderProductoComponent },
  { path:'metodopago', component: PaymentMethodComponent},
  { path:'test', component: ProductInfoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
