import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  experience: Experience = {
    job: '',
    institution: '',
    description: '',
    started: 0,
    finished: 0,
    logoExp: '',
    continues: true
  };

  constructor(private experienceService: ExperienceService, private activatedRoute: ActivatedRoute, private toastr: ToastrService, private router: Router) { }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.getOneExperience(id).subscribe(
      data => {
        this.experience = data;
      },
      /*err => {
        this.toastr.error('Ha ocurrido un error', 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }*/
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.editExperience(id, this.experience).subscribe(
      data => {
        this.toastr.success('Experiencia Actualizada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      /*err => {
        this.toastr.error('Ha ocurrido un error', 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }*/
    );
  }

}
