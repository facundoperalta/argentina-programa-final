import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public experiences: Experience[]=[];

  constructor(private experienceService:ExperienceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getExperiences();
  }

  public getExperiences():void{
    this.experienceService.getExperience().subscribe(data => {this.experiences=data});
  }

  delete(id: any) {
    this.experienceService.deleteExperience(id).subscribe(
      data => {
        this.toastr.success('Educación eliminada correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.getExperiences();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }



}

