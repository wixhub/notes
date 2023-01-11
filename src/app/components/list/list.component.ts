import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public items$!: Observable<Item[]>;

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.items$ = 
        this.dataService.getData().pipe(
          map((data) =>  {
            console.log(data.items);
            return data.items;
          }
    ));
  }
}
