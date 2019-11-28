import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from 'src/app/components/login/login.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { HomeComponent } from './components/home/home.component';
import { CreateProgrammeComponent } from './components/create-programme/create-programme.component';
import { ProgrammesComponent } from './components/programmes/programmes.component';
import { ProgrammeAcheteComponent } from './components/programme-achete/programme-achete.component';
import { ProfilComponent } from './components/profil/profil.component';
import { CoachsComponent } from './components/coachs/coachs.component';
import { ProgrammeCreateCoachComponent } from './components/programme-create-coach/programme-create-coach.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'subscribe',
    component: SubscribeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'createProgramme',
    component: CreateProgrammeComponent
  },
  {
    path: 'programmes',
    component:ProgrammesComponent
  },
  {
    path: 'programmesAchete',
    component:ProgrammeAcheteComponent
  },
  {
    path: 'profil',
    component:ProfilComponent
  },
  {
    path: 'coachs',
    component:CoachsComponent
  },
  {
    path: 'programmeCreateCoach',
    component:ProgrammeCreateCoachComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

