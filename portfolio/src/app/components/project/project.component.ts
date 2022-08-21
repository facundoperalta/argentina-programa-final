import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Projects } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public projects: Projects[]=[];

  constructor(private projectsService:ProjectsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  public getProjects():void {
    this.projectsService.getProjects().subscribe(data => {this.projects=data});
  }

  delete(id: any) {
    this.projectsService.deleteProject(id).subscribe(
      data => {
        this.toastr.success('Educación eliminada correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.getProjects();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }


}

