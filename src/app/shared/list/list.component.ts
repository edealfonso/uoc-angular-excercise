import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from 'src/app/beers/models/beer.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() beers: Beer[] = [];
  @Input() entity: string = 'beer';

  displayedColumns: string[] = ['id', 'name'];

  constructor(private router: Router) {}

  navigate(id: number): void {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/' + this.entity, id]));
  }
}
