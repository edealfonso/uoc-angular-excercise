import { Component, HostListener, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer.interface';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
})
export class BeerListComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  beers: Beer[] = [];
  displayedColumns: string[] = ['id', 'name'];

  showSpinner: boolean = true;
  layout: string = 'list';
  colNumber: number = 2;

  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
    this.beersService.getAllBeers().subscribe((beers) => {
      this.beers = beers;
      this.showSpinner = false;
    });

    this.colNumber = this.recalcCols();

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

  onLayoutChange(val: string): void {
    this.layout = val;
  }
}
