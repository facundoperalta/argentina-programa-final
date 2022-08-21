import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
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
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: '', component: PortfolioComponent},
  {path: 'edit/education/:id', component: EditEducationComponent},
  {path: 'edit/experience/:id', component: EditExperienceComponent},
  {path: 'edit/project/:id', component: EditProjectComponent},
  {path: 'edit/skill/:id', component: EditSkillComponent},
  {path: 'edit/hskill/:id', component: EditHskillComponent},
  {path: 'edit/user/:id', component: EditUserComponent},
  {path: 'new/education', component: CreateEducationComponent},
  {path: 'new/experience', component: CreateExperienceComponent},
  {path: 'new/project', component: CreateProjectComponent},
  {path: 'new/skill', component: CreateSkillComponent},
  {path: 'new/hskill', component: CreateHskillComponent},

  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
