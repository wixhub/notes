import { Component } from '@angular/core';
import { debounceTime } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public searchQuery: string = '';

  constructor(
    private dataService: DataService,
  ) {}

  public search(): void {
    if (this.searchQuery.length > 0) {
      debounceTime(2000);
      this.dataService.searchParameter.next(this.searchQuery);
    } else {
      this.dataService.searchParameter.next('');
    }
  }
}
