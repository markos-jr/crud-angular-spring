import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroDialogComponent } from './components/erro-dialog/erro-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ErroDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErroDialogComponent,
    MatDialogModule,
  ]

})
export class SharedModule { }
