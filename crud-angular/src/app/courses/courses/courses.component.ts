import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [ ];
  displayedColumns: string[] = [ 'name', 'category'];

  dataSource = new MatTableDataSource<CoursesComponent>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //coursesService: CoursesService;


  constructor(private coursesService: CoursesService) {
    // TODO document why this constructor is empty
    //this.coursesService = new CoursesService();
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty


  }

}
