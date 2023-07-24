import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog'; 
import { NgxFileDropModule } from 'ngx-file-drop';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

import { AdminHaberlerComponent } from './admin/admin-haberler/admin-haberler.component';
import { AdminDuyurularComponent } from './admin/admin-duyurular/admin-duyurular.component';
import { HomeDuyurularComponent } from './home/home-duyurular/home-duyurular.component';
import { HomeHaberlerComponent } from './home/home-haberler/home-haberler.component';

import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    AdminHaberlerComponent,
    AdminDuyurularComponent,
    HomeDuyurularComponent,
    HomeHaberlerComponent,
    
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    NgxFileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
