import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SoftSkills } from 'src/app/models/soft-skills';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit {

  softSkill: String = '';
  mastery: number = 0;

  constructor(private softSkillsService:SoftSkillsService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate() {
    const softSkill = new SoftSkills(this.softSkill, this.mastery);
    this.softSkillsService.addSoftSkill(softSkill).subscribe(
      data => { 
        this.toastr.success('Habilidad creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/portfolio'])
      }, err => {
        this.toastr.error('Error', 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        }); 
      }
    );
  }


}
