import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from '../../models/beer.interface';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss'],
})
export class BeerItemComponent implements OnInit {
  beer?: Beer;

  constructor(
    private beersService: BeersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id') || '';
    console.log('Identifier -->', identifier);

    this.beersService.getBeerById(identifier).subscribe((beers) => {
      if (!beers) {
        return this.router.navigateByUrl('');
      }

      this.beer = beers[0];
      console.log('Beer --> ', this.beer);
    });
  }
}
