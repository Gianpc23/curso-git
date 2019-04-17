import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
    MatGridListModule,MatCardModule,MatTableModule,
  ],
  exports: [MatButtonModule, MatCheckboxModule,
    MatGridListModule,MatCardModule,MatTableModule,
  ],

})

export class Material { }