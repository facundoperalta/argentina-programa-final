import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarTogglerComponent } from './components/header/navbar-toggler/navbar-toggler.component';
import { NavbarOffcanvasComponent } from './components/header/navbar-offcanvas/navbar-offcanvas.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CreateEducationComponent } from './components/crud/create-education/create-education.component';
import { EditEducationComponent } from './components/crud/edit-education/edit-education.component';
import { CreateExperienceComponent } from './components/crud/create-experience/create-experience.component';
import { CreateSkillComponent } from './components/crud/create-skill/create-skill.component';
import { CreateProjectComponent } from './components/crud/create-project/create-project.component';
import { EditExperienceComponent } from './components/crud/edit-experience/edit-experience.component';
import { EditProjectComponent } from './components/crud/edit-project/edit-project.component';
import { EditSkillComponent } from './components/crud/edit-skill/edit-skill.component';
import { EditUserComponent } from './components/crud/edit-user/edit-user.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EditHskillComponent } from './components/crud/edit-hskill/edit-hskill.component';
import { CreateHskillComponent } from './components/crud/create-hskill/create-hskill.component';
import { LoginComponent } from './components/auth/login.component';
import { RegisterComponent } from './components/auth/register.component';
import { IndexComponent } from './components/index/index.component';
import { interceptorProvider } from './services/interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarTogglerComponent,
    NavbarOffcanvasComponent,
    BannerComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectComponent,
    FooterComponent,
    CreateEducationComponent,
    EditEducationComponent,
    CreateExperienceComponent,
    CreateSkillComponent,
    CreateProjectComponent,
    EditExperienceComponent,
    EditProjectComponent,
    EditSkillComponent,
    EditUserComponent,
    PortfolioComponent,
    EditHskillComponent,
    CreateHskillComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
