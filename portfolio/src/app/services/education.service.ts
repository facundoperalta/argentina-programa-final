import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  URL = 'http://localhost:8080/api/education/';

  constructor(private http: HttpClient) { }

  public getEducation(): Observable<Education[]>{
    return this.http.get<Education[]>(`${this.URL}get`);
  }
  public getOneEducation(id: number): Observable<Education>{
    return this.http.get<Education>(`${this.URL}get/${id}`);
  }
  public addEducation(education: Education):Observable<Education>{
    return this.http.post<Education>(`${this.URL}create`,education);
  }
  public editEducation(id: number, education: Education):Observable<Education>{
    return this.http.put<Education>(`${this.URL}edit/${id}`,education);
  }
  public deleteEducation(id: number):Observable<Education>{
    return this.http.delete<Education>(`${this.URL}delete/${id}`);
  }
  
}

