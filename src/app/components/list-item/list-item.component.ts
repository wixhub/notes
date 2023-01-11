import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() public item!: Item;

  constructor(
    private dataService: DataService,
  ) {}

  public showDetail(): void {
    if (this.item) {
      this.dataService.currentItem.next(this.item);
    }
  }
}
