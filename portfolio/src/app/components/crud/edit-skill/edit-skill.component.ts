import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SoftSkills } from 'src/app/models/soft-skills';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  softSkill: SoftSkills = {
    softSkill: '',
    mastery: 0,
  }

  constructor(private softSkillsService: SoftSkillsService, private activatedRoute: ActivatedRoute, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.softSkillsService.getOneSoftSkill(id).subscribe(
      data => {
        this.softSkill = data;
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
    this.softSkillsService.editSoftSkill(id, this.softSkill).subscribe(
      data => {
        this.toastr.success('Experiencia Actualizada', 'OK', {
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