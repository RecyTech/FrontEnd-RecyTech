import {HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './public/pages/home/home.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { HeaderComponent } from './public/components/header/header.component';
import { SignupComponent } from './public/components/auth/signup/signup.component';
import { SigninComponent } from './public/components/auth/signin/signin.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormVenderProductoComponent } from "./product/pages/form-vender-producto/form-vender-producto.component";
import { PaymentMethodComponent } from './public/components/payment-method/payment-method.component';

import { RouterModule } from '@angular/router';
import { ProductInfoPageComponent } from './product/pages/product-info-page/product-info-page.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    FormVenderProductoComponent,
    PaymentMethodComponent,
    ProductInfoPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTable,
        MatSort,
        MatColumnDef,
        MatHeaderCell,
        MatCell,
        MatHeaderCellDef,
        MatCellDef,
        MatRow,
        MatHeaderRow,
        MatHeaderRowDef,
        MatRowDef,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
          { path: 'home', component: HomeComponent },
        ])

    ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
