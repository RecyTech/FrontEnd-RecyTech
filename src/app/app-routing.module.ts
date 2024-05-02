import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./public/components/auth/signin/signin.component";
import {SignupComponent} from "./public/components/auth/signup/signup.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {ProductsComponent} from "./buying/pages/products/products.component";
import {
  ProductCreateAndEditComponent
} from "./buying/components/product-create-and-edit/product-create-and-edit.component";

const routes: Routes = [
  { path:'', component: ProductsComponent },
  { path: 'add', component: ProductCreateAndEditComponent },
  { path:'signin', component: SigninComponent },
  { path:'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
