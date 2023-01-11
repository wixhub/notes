import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() public item!: Item;

  public showDetail(): void {
    let path = null;
    if (this.item && this.item.id) {
      path = this.item.id;
    }
  }
}
