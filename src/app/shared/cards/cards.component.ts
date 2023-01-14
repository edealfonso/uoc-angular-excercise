import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() entity: string = 'beer';

  constructor(private router: Router) {
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

  navigate(id: number): void {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/' + this.entity, id]));
  }
}
