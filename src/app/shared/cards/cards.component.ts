import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/beers/models/beer.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  @Input()
  beers: Beer[] = [];
  colNumber: number;

  constructor() {
    this.colNumber = this.recalcCols();
  }

  ngOnInit(): void {
    onresize = () => {
      this.colNumber = this.recalcCols();
    };
  }

  recalcCols(): number {
    if (window.innerWidth <= 500) {
      return 2;
    }
    if (window.innerWidth <= 900) {
      return 3;
    }
    if (window.innerWidth <= 1300) {
      return 4;
    }
    return 5;
  }
}
