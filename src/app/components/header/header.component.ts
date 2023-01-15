import { Component } from '@angular/core';
import { debounceTime, take } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateNoteComponent } from '../create-note/create-note.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public searchQuery: string = '';

  constructor(
    private dataService: DataService,
    private createNoteModal: MatDialog,
  ) {}

  public search(): void {
    if (this.searchQuery.length > 0) {
      debounceTime(2000);
      this.dataService.searchParameter.next(this.searchQuery);
    } else {
      this.dataService.searchParameter.next('');
    }
  }

  createNote() {
    const dialogRef = this.createNoteModal.open(CreateNoteComponent, {
      maxWidth: '600px'
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((dialogResult) => {
        if (dialogResult) {
          this.dataService
            .addNote(
              dialogResult[0],
              dialogResult[1],
              dialogResult[2]
            );
        }
      });
  }
}
