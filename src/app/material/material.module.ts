import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
