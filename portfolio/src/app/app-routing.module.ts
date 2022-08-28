import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login.component';
import { RegisterComponent } from './components/auth/register.component';
import { CreateEducationComponent } from './components/crud/create-education/create-education.component';
import { CreateExperienceComponent } from './components/crud/create-experience/create-experience.component';
import { CreateHskillComponent } from './components/crud/create-hskill/create-hskill.component';
import { CreateProjectComponent } from './components/crud/create-project/create-project.component';
import { CreateSkillComponent } from './components/crud/create-skill/create-skill.component';
import { EditEducationComponent } from './components/crud/edit-education/edit-education.component';
import { EditExperienceComponent } from './components/crud/edit-experience/edit-experience.component';
import { EditHskillComponent } from './components/crud/edit-hskill/edit-hskill.component';
import { EditProjectComponent } from './components/crud/edit-project/edit-project.component';
import { EditSkillComponent } from './components/crud/edit-skill/edit-skill.component';
import { EditUserComponent } from './components/crud/edit-user/edit-user.component';
import { IndexComponent } from './components/index/index.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GuardService as guard } from './services/guard.service';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  {path: 'portfolio', component: PortfolioComponent, canActivate: [guard], data: { expectedRole: ['admin', 'user']}},
  {path: 'edit/education/:id', component: EditEducationComponent, canActivate: [guard], data: { expectedRole: ['admin']}},
  {path: 'edit/experience/:id', component: EditExperienceComponent, canActivate: [guard], data: { expectedRole: ['admin']}},
  {path: 'edit/project/:id', component: EditProjectComponent, canActivate: [guard], data: { expectedRole: ['admin']}},
  {path: 'edit/skill/:id', component: EditSkillComponent, canActivate: [guard], data: { expectedRole: ['admin']}},
  {path: 'edit/hskill/:id', component: EditHskillComponent, canActivate: [guard], data: { expectedRole: ['admin']}},
  {path: 'edit/user/:id', component: EditUserComponent, canActivate: [guard], data: { expectedRole: ['admin']}},
  {path: 'new/education', component: CreateEducationComponent, canActivate: [guard], data: { expectedRole: ['admin']}},
  {path: 'new/experience', component: CreateExperienceComponent, canActivate: [guard], data: { expectedRole: ['admin']}},
  {path: 'new/project', component: CreateProjectComponent, canActivate: [guard], data: { expectedRole: ['admin']}},
  {path: 'new/skill', component: CreateSkillComponent, canActivate: [guard], data: { expectedRole: ['admin']}},
  {path: 'new/hskill', component: CreateHskillComponent, canActivate: [guard], data: { expectedRole: ['admin']}},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
