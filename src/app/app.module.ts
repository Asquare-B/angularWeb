import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './myComponents/footer/footer.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { ContactcardComponent } from './myComponents/contactcard/contactcard.component';
import { HomesliderComponent } from './myComponents/homeslider/homeslider.component';
import { CovidcardComponent } from './myComponents/covidcard/covidcard.component';
import { VaccinecardComponent } from './myComponents/vaccinecard/vaccinecard.component';
import { ServicecardComponent } from './myComponents/servicecard/servicecard.component';
import { CommentcardComponent } from './myComponents/commentcard/commentcard.component';
import { WhyuscardComponent } from './myComponents/whyuscard/whyuscard.component';
import { CoutercardComponent } from './myComponents/coutercard/coutercard.component';
import { ContentComponent } from './myComponents/content/content.component';
import { FaqComponent } from './myComponents/faq/faq.component';
import { FaqQuesComponent } from './myComponents/faq-ques/faq-ques.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ContactcardComponent,
    CovidcardComponent,
    VaccinecardComponent,
    ServicecardComponent,
    CommentcardComponent,
    HomesliderComponent,
    WhyuscardComponent,
    CoutercardComponent,
    ContentComponent,
    FaqComponent,
    FaqQuesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomesliderComponent},
      {path: 'faq', component: FaqComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
