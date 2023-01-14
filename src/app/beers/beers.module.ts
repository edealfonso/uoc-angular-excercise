import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';
import { BeerItemComponent } from './components/beer-item/beer-item.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';

@NgModule({
  declarations: [BeerItemComponent, BeerListComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatButtonToggleModule,
    SharedModule,
  ],
  exports: [BeerItemComponent, BeerListComponent],
})
export class BeersModule {}
