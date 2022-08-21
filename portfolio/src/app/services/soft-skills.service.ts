import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkills } from '../models/soft-skills';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {
  URL = 'http://localhost:8080/api/softskills/';

  constructor(private http: HttpClient) { }

  public getSoftSkills(): Observable<SoftSkills[]>{
    return this.http.get<SoftSkills[]>(`${this.URL}get`);
  }
  public getOneSoftSkill(id: number): Observable<SoftSkills>{
    return this.http.get<SoftSkills>(`${this.URL}get/${id}`);
  }
  public addSoftSkill(softSkill: SoftSkills):Observable<SoftSkills>{
    return this.http.post<SoftSkills>(`${this.URL}create`,softSkill);
  }
  public editSoftSkill(id: number, softSkill: SoftSkills):Observable<SoftSkills>{
    return this.http.put<SoftSkills>(`${this.URL}edit/${id}`,softSkill);
  }
  public deletesoftSkill(id: number):Observable<SoftSkills>{
    return this.http.delete<SoftSkills>(`${this.URL}delete/${id}`);
  }
}
