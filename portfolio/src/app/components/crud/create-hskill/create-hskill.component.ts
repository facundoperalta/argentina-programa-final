import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HardSkills } from 'src/app/models/hard-skills';
import { HardSkillsService } from 'src/app/services/hard-skills.service';

@Component({
  selector: 'app-create-hskill',
  templateUrl: './create-hskill.component.html',
  styleUrls: ['./create-hskill.component.css']
})
export class CreateHskillComponent implements OnInit {

  hardSkill: String = '';
  technology: String = '';
  mastery: number = 0;

  constructor(private hardSkillsService:HardSkillsService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate() {
    const hardSkill = new HardSkills(this.hardSkill, this.technology, this.mastery);
    this.hardSkillsService.addHardSkill(hardSkill).subscribe(
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
