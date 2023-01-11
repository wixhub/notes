import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Item, Result } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
    
  public currentItem: BehaviorSubject<Item> = new BehaviorSubject<Item>(    {
    "id": "0",
    "title": "Note Start",
    "text": "Text Start",
    "tags": [
      "angular",
      "javascript",
      "rxjs"
    ]
  });

  public searchParameter: BehaviorSubject<string> = new BehaviorSubject<string>('');
        
  private source = 'assets/list.json';

  constructor(private http: HttpClient) {}

  public getData(query: string): Observable<Item[]> {
    return this.http.get(this.source).pipe(
      map(
        (result) =>
         {
          const res = result as Result;
          if (query) {
            return res.items.filter((item) => item.title.includes(query) || item.text?.includes(query));
          }
            return res.items;
         }
      )
    );
  }
}