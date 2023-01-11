import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Item, Result } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private source = 'assets/list.json';

  constructor(private http: HttpClient) {}

  public getData(): Observable<Result> {
    return this.http.get<Result>(this.source);
  }

  public getItemById(id: string): Observable<Item | null> {
    return this.getData().pipe(
      map(
        (response) =>
          response.items.filter((item) => item.id == id)[0] ?? null
      )
    );
  }
}