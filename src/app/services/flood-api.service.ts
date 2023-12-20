import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Item } from '../models/flood';

@Injectable({
  providedIn: 'root'
})
export class FloodApiService {

  // API URL
  private url: string = "http://environment.data.gov.uk/flood-monitoring";

  constructor(private http: HttpClient) { }

  getFloodWarningToday() {
    return this.http.get(this.url + '/id/floods').pipe(
      map((response: any) => {
        response.items.forEach((item: Item) => {
          item.timeRaised = new Date(item.timeRaised);
        });

        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set time to start of today

        response.items = response.items
          .filter((item: Item) => {
            return new Date(item.timeRaised).toDateString() === today.toDateString();
          })
          .filter((item: Item) => {
            return item.severity === 'Flood alert';
          })
          .sort((a: Item, b: Item) => {
            return b.timeRaised.getTime() - a.timeRaised.getTime();
          });

        return response;
      })
    );
  }
}
