import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './public/pages/home/home.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { HeaderComponent } from './public/components/header/header.component';
import { SectionComponent } from './public/components/section/section.component';
import { SignupComponent } from './public/components/auth/signup/signup.component';
import { SigninComponent } from './public/components/auth/signin/signin.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {ProductoService} from "./public/services/producto.service";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ProductsComponent } from './buying/pages/products/products.component';
import { ProductCreateAndEditComponent } from './buying/components/product-create-and-edit/product-create-and-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SectionComponent,
    SignupComponent,
    SigninComponent,
    ProductsComponent,
    ProductCreateAndEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule

  ],
  providers: [
    provideAnimationsAsync(),
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
