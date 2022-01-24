import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './myComponents/user/user.component';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { ApplicationListComponent } from './myComponents/application-list/application-list.component';
import { ApplicationItemComponent } from './myComponents/application-item/application-item.component';
import { DoctorListComponent } from './myComponents/doctor-list/doctor-list.component';
import { DoctorItemComponent } from './myComponents/doctor-item/doctor-item.component';
import { DetailsFormComponent } from './myComponents/details-form/details-form.component';
import { DetailsHomeComponent } from './myComponents/details-home/details-home.component';
import { ContactHomeComponent } from './myComponents/contact-home/contact-home.component';
import { ContactItemComponent } from './myComponents/contact-item/contact-item.component';
import { EmergencyComponent } from './myComponents/emergency/emergency.component';
import { FooterComponent } from './myComponents/footer/footer.component';
import { ProfileComponent } from './myComponents/profile/profile.component';
import { ApplicationFormComponent } from './myComponents/application-form/application-form.component';
import { DoctorFormComponent } from './myComponents/doctor-form/doctor-form.component';
import { ContactFormComponent } from './myComponents/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    HeaderComponent,
    ApplicationListComponent,
    ApplicationItemComponent,
    DoctorListComponent,
    DoctorItemComponent,
    DetailsFormComponent,
    DetailsHomeComponent,
    ContactHomeComponent,
    ContactItemComponent,
    EmergencyComponent,
    FooterComponent,
    ProfileComponent,
    ApplicationFormComponent,
    DoctorFormComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
