import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  URL = 'http://localhost:8080/api/person/';

  constructor(private http: HttpClient) { }

  public getPerson(id: number): Observable<Person>{
    return this.http.get<Person>(`${this.URL}get/${id}`);
  }

  public editPerson(id: number, person: Person):Observable<Person>{
    return this.http.put<Person>(`${this.URL}edit/${id}`, person);
  }

}


/* versión funciona
  public getPerson(): Observable<Person>{
    return this.http.get<Person>(`${this.URL}get/1`);
  }
  */