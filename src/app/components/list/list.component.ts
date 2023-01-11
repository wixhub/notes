import { Component, OnInit } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public items$!: Observable<Item[]>;

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.items$ = this.dataService.searchParameter.pipe(
      switchMap((param) => this.dataService.getData(param))
    )
  }
}
