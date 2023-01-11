import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public item$!: Observable<Item>;

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.item$ = 
        this.dataService.currentItem.pipe(
          map((data) => data));
  }
}
