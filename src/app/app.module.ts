import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountryNamesComponent } from './country-names/country-names.component'

import { DragDropModule } from '@angular/cdk/drag-drop';

//Angular Material 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { NotificationsComponent } from './notifications/notifications.component';
import { ReportComponent } from './report/report.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoComponent } from './producto/producto.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ChatComponent } from './chat/chat.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductoInfoComponent } from './producto-info/producto-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    CountryNamesComponent,
    NotificationsComponent,
    ReportComponent,
    CategoryComponent,
    ProductoComponent,
    TiendaComponent,
    ChatComponent,
    CarritoComponent,
    ProductoInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
