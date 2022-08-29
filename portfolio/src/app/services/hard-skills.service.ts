import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkills } from '../models/hard-skills';

@Injectable({
  providedIn: 'root'
})
export class HardSkillsService {

  URL = 'https://portfolio-backend-arg.herokuapp.com/api/hardskills/';
//  URL = 'http://localhost:8080/api/hardskills/';

  constructor(private http: HttpClient) { }

  public getHardSkills(): Observable<HardSkills[]>{
    return this.http.get<HardSkills[]>(`${this.URL}get`);
  }
  public getOneSkill(id: number): Observable<HardSkills>{
    return this.http.get<HardSkills>(`${this.URL}get/${id}`);
  }
  public addHardSkill(hardSkill: HardSkills):Observable<HardSkills>{
    return this.http.post<HardSkills>(`${this.URL}create`,hardSkill);
  }
  public editHardSkill(id: number, hardSkill: HardSkills):Observable<HardSkills>{
    return this.http.put<HardSkills>(`${this.URL}edit/${id}`,hardSkill);
  }
  public deleteHardSkill(id: number):Observable<HardSkills>{
    return this.http.delete<HardSkills>(`${this.URL}delete/${id}`);
  }
}
