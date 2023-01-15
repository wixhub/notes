import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Item, Result } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
    
  public currentItem: BehaviorSubject<Item> = new BehaviorSubject<Item>(    {
    "id": "0",
    "title": "Add Notes App",
    "text": "Add a new note or search in a list",
    "tags": [
      "angular",
      "typescript",
      "rxjs"
    ]
  });

  public searchParameter: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public notes: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
        
  private source = 'assets/list.json';

  constructor(private http: HttpClient) {}

  public getData(query: string): Observable<Item[]> {
    const n: Item[] = this.notes.value;

    if (n.length === 0) {
      return this.http.get(this.source).pipe(
        map(
          (result) =>
           {
            const res = result as Result;
            this.notes.next(res.items);
            return res.items;
           }
        )
      );
    }

    if (query) {
      return of(n.filter((item) => item.title.includes(query) || item.text?.includes(query)));
    }

    return of(n);
  }

  public addNote(
    title: string,
    text: string,
    tags: string[]
  ) {
    const value = this.notes.value;
    value.push({
      id: this.notes.value.length.toString(),
      title: title,
      text: text,
      tags: tags
    })
    this.notes.next(value);
  }
}