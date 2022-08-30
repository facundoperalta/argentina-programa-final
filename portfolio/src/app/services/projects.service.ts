import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../models/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

//  URL = 'https://portfolio-backend-arg.herokuapp.com/api/projects/';
  URL = 'http://localhost:8080/api/projects/';

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<Projects[]>{
    return this.http.get<Projects[]>(`${this.URL}get`);
  }
  public getOneProject(id: number): Observable<Projects>{
    return this.http.get<Projects>(`${this.URL}get/${id}`);
  }
  public addProject(project: Projects):Observable<Projects>{
    return this.http.post<Projects>(`${this.URL}create`, project);
  }
  public editProject(id: number, project: Projects):Observable<Projects>{
    return this.http.put<Projects>(`${this.URL}edit/${id}`, project);
  }
  public deleteProject(id: number):Observable<Projects>{
    return this.http.delete<Projects>(`${this.URL}delete/${id}`);
  }
}