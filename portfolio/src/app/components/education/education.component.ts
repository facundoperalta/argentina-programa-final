import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public educations: Education[]=[];
  roles: string[];
  isAdmin = false;

  public array1: number[]=[0,3,6,9,12,15,18,21,24,27]
  public array2: number[]=[1,4,7,10,13,16,19,22,25,28]
  public array3: number[]=[2,5,8,11,14,17,20,23,26,29]


  constructor(private educationService:EducationService, private toastr: ToastrService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getEducations();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
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

