import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
private readonly API = 'http://localhost:8080/api/courses'
  constructor(private httpClient: HttpClient) { /* TODO document why this constructor is empty */  }

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(0),
      tap((courses: any) => console.log(courses))
    );
  }
}
