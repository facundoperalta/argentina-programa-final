import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: Person = {
    firstName: '',
    lastName: '',
    birthDate: '',
    place: '',
    occupation: '',
    profileImage: '',
    about: ''
  };

  constructor(private personService: PersonService, private activatedRoute: ActivatedRoute, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personService.getPerson(id).subscribe(
      data => {
        this.user = data;
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
    this.personService.editPerson(id, this.user).subscribe(
      data => {
        this.toastr.success('Usuario Actualizado', 'OK', {
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