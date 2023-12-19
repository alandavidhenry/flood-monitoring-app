import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Flood } from '../models/flood';

@Injectable({
  providedIn: 'root'
})
export class FloodApiService {

  // API URL
  private url: string = "http://environment.data.gov.uk/flood-monitoring";

  constructor(private http: HttpClient) { }

  getFloodWarningDetails() {
    return this.http.get(this.url + '/id/floods').pipe(
      map((response: any) => {
        return {
          "@context": response["@context"],
          meta: response.meta,
          items: response.items
        } as Flood;
      })
    );
  }
}
