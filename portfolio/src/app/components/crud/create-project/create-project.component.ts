import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Projects } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  project: String = '';
  description: String = '';
  address: String = '';
  projectImage: String = '';

  constructor(private projectService:ProjectsService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate() {
    const project = new Projects(this.project, this.description, this.address, this.projectImage);
    this.projectService.addProject(project).subscribe(
      data => { 
        this.toastr.success('Proyecto creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/'])
      }, err => {
        this.toastr.error('Error', 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        }); 
      }
    );
  }


}
