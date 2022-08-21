import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  URL = 'http://localhost:8080/api/experience/';

  constructor(private http: HttpClient) { }

  public getExperience(): Observable<Experience[]>{
    return this.http.get<Experience[]>(`${this.URL}get`);
  }
  public getOneExperience(id: number): Observable<Experience>{
    return this.http.get<Experience>(`${this.URL}get/${id}`);
  }
  public addExperience(experience: Experience):Observable<Experience>{
    return this.http.post<Experience>(`${this.URL}create`,experience);
  }
  public editExperience(id: number, experience: Experience):Observable<Experience>{
    return this.http.put<Experience>(`${this.URL}edit/${id}`,experience);
  }
  public deleteExperience(id: number):Observable<Experience>{
    return this.http.delete<Experience>(`${this.URL}delete/${id}`);
  }
}
