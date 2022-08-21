import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public educations: Education[]=[];


  constructor(private educationService:EducationService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getEducations();
  }

  public getEducations():void{
    this.educationService.getEducation().subscribe(data => {this.educations=data});
  }

  delete(id: any) {
    this.educationService.deleteEducation(id).subscribe(
      data => {
        this.toastr.success('Educación eliminada correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.getEducations();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}

