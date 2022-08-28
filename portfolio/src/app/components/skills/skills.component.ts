import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HardSkills } from 'src/app/models/hard-skills';
import { SoftSkills } from 'src/app/models/soft-skills';
import { HardSkillsService } from 'src/app/services/hard-skills.service';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public hardSkills: HardSkills[]=[];
  public softSkills: SoftSkills[]=[];
  roles: string[];
  isAdmin = false;



  constructor(private hardSkillsService:HardSkillsService, private softSkillsService:SoftSkillsService, private toastr: ToastrService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getHardSkills();
    this.getSoftSkills();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })


  }

  public getHardSkills():void{
    this.hardSkillsService.getHardSkills().subscribe(data => {this.hardSkills=data});
  }
  public getSoftSkills():void{
    this.softSkillsService.getSoftSkills().subscribe(data => {this.softSkills=data});
  }

  delete(id: any) {
    this.softSkillsService.deletesoftSkill(id).subscribe(
      data => {
        this.toastr.success('Habilidad blanda correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.getSoftSkills();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );  }

  deletes(id: any) {
    this.hardSkillsService.deleteHardSkill(id).subscribe(
      data => {
        this.toastr.success('Educación eliminada correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.getHardSkills();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );  }

}



