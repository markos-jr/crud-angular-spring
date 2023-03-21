import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  //courses: Course[] = [] *Usado com array de cursos e NgFor*
  displayedColumns: string[] = [ 'name', 'category'];

  dataSource = new MatTableDataSource<CoursesComponent>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //coursesService: CoursesService;


  constructor(private coursesService: CoursesService) {

    //this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list();

    //this.coursesService.list().subscribe(courses => this.courses = courses); *Usado com array de cursos e NgFor*
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty


  }

}
