import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroDialogComponent } from './components/erro-dialog/erro-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryPipe } from './pipes/category.pipe';



@NgModule({
  declarations: [
    ErroDialogComponent,
    CategoryPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErroDialogComponent,
    MatDialogModule,
    CategoryPipe,
  ]

})
export class SharedModule { }
