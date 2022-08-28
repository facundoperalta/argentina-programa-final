import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public person: Person | undefined;
  /*public editPerson: Person | undefined;*/
  roles: string[];
  isAdmin = false;

  constructor(private personService : PersonService, private tokenService: TokenService ) { }

  ngOnInit(): void {
    this.getPerson();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })


  }

  public getPerson():void{
    this.personService.getPerson(1).subscribe(data => {this.person=data})
  }

}
