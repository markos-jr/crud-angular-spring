import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { catchError, Observable, of } from 'rxjs';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';
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
  displayedColumns: string[] = [ 'name', 'category', 'actions'];

  dataSource = new MatTableDataSource<CoursesComponent>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //coursesService: CoursesService;


  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog) {

    //this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list().pipe(
      catchError( erro => {
        this.onError("Erro ao carregar cursos.")
        return of ([])
      })
    );

    //this.coursesService.list().subscribe(courses => this.courses = courses); *Usado com array de cursos e NgFor*

  }

  onError(errorMsg: string) {
    this.dialog.open(ErroDialogComponent, {
      data: errorMsg,
      width:'400px',
      height:'130px'
    });

}
  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty


  }

  onAdd(){
    alert('Clicou')
  }


}
