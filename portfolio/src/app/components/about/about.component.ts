import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public person: Person | undefined;
  /*public editPerson: Person | undefined;*/

  constructor(private personService : PersonService ) { }

  ngOnInit(): void {
    this.getPerson();
  }

  public getPerson():void{
    this.personService.getPerson().subscribe(response => {this.person=response})
  }

}
