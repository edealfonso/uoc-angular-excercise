import { Component, Input } from '@angular/core';
import { Beer } from 'src/app/beers/models/beer.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() beers: Beer[] = [];
  displayedColumns: string[] = ['id', 'name'];
}
