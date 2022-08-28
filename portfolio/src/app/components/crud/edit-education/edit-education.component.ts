import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

    education: Education = {
    degree: '',
    year: 0,
    institution: '',
    finished: false,
    logoEdu: ''
  };



  constructor(private educationService: EducationService, private activatedRoute: ActivatedRoute, private toastr: ToastrService, private router: Router) { }



  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.getOneEducation(id).subscribe(
      data => {
        this.education = data;
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
    this.educationService.editEducation(id, this.education).subscribe(
      data => {
        this.toastr.success('Educación Actualizada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/portfolio']);
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

  /*  education: Education = null;

  constructor(private educationService: EducationService, private activatedRoute: ActivatedRoute, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.getOneEducation(id).subscribe(
      data => {
        this.education = data;
      },
      err => {
        this.toastr.error('Ha ocurrido un error', 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.editEducation(id, this.education).subscribe(
      data => {
        this.toastr.success('Educación Actualizada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error('Ha ocurrido un error', 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}*/
