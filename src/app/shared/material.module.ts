import { NgModule } from '@angular/core';
import { 
          MatButtonModule,
          MatCheckboxModule,          
          MatNativeDateModule,
          MatIconModule,
          MatInputModule,
          MatSelectModule,         
          MatRadioModule,
          MatSlideToggleModule
        } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [    
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatSlideToggleModule   
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
