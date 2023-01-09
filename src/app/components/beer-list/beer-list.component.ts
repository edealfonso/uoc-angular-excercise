import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer.interface';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
})
export class BeerListComponent implements OnInit {
  beers: Beer[] = [];

  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
    this.beersService.getAllBeers().subscribe((beers) => (this.beers = beers));
  }
}
