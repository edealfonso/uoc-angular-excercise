import { Component, OnInit } from '@angular/core';
import { Beer } from '../../models/beer.interface';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
})
export class BeerListComponent implements OnInit {
  beers: Beer[] = [];
  showSpinner: boolean = true;
  layout: string = 'list';

  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
    this.beersService.getAllBeers().subscribe((beers) => {
      this.beers = beers;
      this.showSpinner = false;
    });
  }

  onLayoutChange(val: string): void {
    this.layout = val;
  }
}
