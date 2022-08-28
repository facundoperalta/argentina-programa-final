import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HardSkills } from 'src/app/models/hard-skills';
import { HardSkillsService } from 'src/app/services/hard-skills.service';


@Component({
  selector: 'app-edit-hskill',
  templateUrl: './edit-hskill.component.html',
  styleUrls: ['./edit-hskill.component.css']
})
export class EditHskillComponent implements OnInit {

  hardSkill: HardSkills = {
    hardSkill: '',
    technology: '',
    mastery: 0,
  }

  constructor(private hardSkillsService: HardSkillsService, private activatedRoute: ActivatedRoute, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.hardSkillsService.getOneSkill(id).subscribe(
      data => {
        this.hardSkill = data;
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
    this.hardSkillsService.editHardSkill(id, this.hardSkill).subscribe(
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