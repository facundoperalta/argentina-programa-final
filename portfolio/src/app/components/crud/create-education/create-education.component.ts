import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-create-education',
  templateUrl: './create-education.component.html',
  styleUrls: ['./create-education.component.css']
})
export class CreateEducationComponent implements OnInit {

  degree: String = '';
  year: number = 0;
  institution: String = '';
  finished: boolean = true;
  logoEdu: String = '';

  constructor(private educationService:EducationService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate() {
    const education = new Education(this.degree, this.year, this.institution, this.finished, this.logoEdu);
    this.educationService.addEducation(education).subscribe(
      data => {
        this.toastr.success('Educación creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/'])
      },
      err => {
        this.toastr.error('ocurrió un error', 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
