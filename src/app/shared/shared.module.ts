import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CardsComponent } from './cards/cards.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [CardsComponent, ListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
  ],
  exports: [CardsComponent, ListComponent],
})
export class SharedModule {}
