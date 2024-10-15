import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { Item } from '../models/flood'

@Injectable({
  providedIn: 'root'
})
export class FloodApiService {
  private url: string = 'https://environment.data.gov.uk/flood-monitoring'

  constructor(private http: HttpClient) {}

  getFloodWarningToday() {
    return this.http.get(`${this.url}/id/floods`).pipe(
      map((response: any) => {
        response.items.forEach((item: Item) => {
          item.timeRaised = new Date(item.timeRaised)
        })

        const today = new Date()
        today.setHours(0, 0, 0, 0) // Set time to start of today

        response.items = response.items
          .filter((item: Item) => {
            return (
              new Date(item.timeRaised).toDateString() === today.toDateString()
            )
          })
          .filter((item: Item) => {
            return item.severity === 'Flood alert'
          })
          .sort((a: Item, b: Item) => {
            return b.timeRaised.getTime() - a.timeRaised.getTime()
          })

        return response
      })
    )
  }

  getFloodWarningDetails(floodAreaID: string): Observable<Item> {
    console.log('Fetching flood warning details for ID:', floodAreaID)
    return this.http.get<any>(`${this.url}/id/floods/${floodAreaID}`).pipe(
      map((response) => {
        console.log('Raw API response:', response)
        return response.items as Item
      })
    )
  }

  getStationsSearchRiverName(searchTerm: string): Observable<any> {
    return this.http.get(`${this.url}/id/stations?search=${searchTerm}`)
  }
}
