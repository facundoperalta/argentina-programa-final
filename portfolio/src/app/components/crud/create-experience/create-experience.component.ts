import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-create-experience',
  templateUrl: './create-experience.component.html',
  styleUrls: ['./create-experience.component.css']
})
export class CreateExperienceComponent implements OnInit {

  job: String = '';
  institution: String = '';
  description: String = '';
  started: number = 0;
  finished: number = 0;
  logoExp: String = '';
  continues: boolean = true;

  constructor(private experienceService:ExperienceService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate() {
    const experience = new Experience(this.job, this.institution, this.description, this.started, this.finished, this.logoExp, this.continues);
    this.experienceService.addExperience(experience).subscribe(
      data => {
        this.toastr.success('Experiencia creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/portfolio'])
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }


}
