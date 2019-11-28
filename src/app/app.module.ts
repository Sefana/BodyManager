import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CreateProgrammeComponent } from './components/create-programme/create-programme.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ProgrammesComponent } from './components/programmes/programmes.component';
import { CoachsComponent } from './components/coachs/coachs.component';
import { ProgrammeAcheteComponent } from './components/programme-achete/programme-achete.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ProgrammeCreateCoachComponent } from './components/programme-create-coach/programme-create-coach.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscribeComponent,
    HomeComponent,
    CreateProgrammeComponent,
    ProgrammesComponent,
    CoachsComponent,
    ProgrammeAcheteComponent,
    ProfilComponent,
    ProgrammeCreateCoachComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}
