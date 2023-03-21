import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
private readonly API = '/assets/cursos.json'
  constructor(private httpClient: HttpClient) { /* TODO document why this constructor is empty */  }

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(5000),
      tap((courses: any) => console.log(courses))
    );
  }
}
