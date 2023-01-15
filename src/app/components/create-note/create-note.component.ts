import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {

  titleField: string = '';

  textField: string = '';

  tagsField: string = '';

  constructor(
    public dialogRef: MatDialogRef<CreateNoteComponent>,
    public dataService: DataService,
  ) {}

  onCommand(): void {
    this.dialogRef.close([
      this.titleField,
      this.textField,
      this.tagsField
    ]);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}