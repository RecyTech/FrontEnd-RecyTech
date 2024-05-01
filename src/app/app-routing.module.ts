import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./public/components/auth/signin/signin.component";
import {SignupComponent} from "./public/components/auth/signup/signup.component";
import {HomeComponent} from "./public/pages/home/home.component";

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'signin', component: SigninComponent },
  { path:'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
