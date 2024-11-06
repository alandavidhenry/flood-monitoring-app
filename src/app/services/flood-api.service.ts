import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { Item } from '../models/flood'

@Injectable({
  providedIn: 'root'
})
export class FloodApiService {
  private floodBaseUrl: string =
    'https://environment.data.gov.uk/flood-monitoring'
  private postcodeBaseUrl = 'https://api.postcodes.io'

  constructor(private http: HttpClient) {}

  getFloodWarningToday() {
    return this.http.get(`${this.floodBaseUrl}/id/floods`).pipe(
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
    return this.http
      .get<any>(`${this.floodBaseUrl}/id/floods/${floodAreaID}`)
      .pipe(
        map((response) => {
          return response.items as Item
        })
      )
  }

  getStationsSearchRiverName(searchTerm: string): Observable<any> {
    return this.http.get(
      `${this.floodBaseUrl}/id/stations?search=${searchTerm}`
    )
  }

  getCoordinatesFromPostcode(
    postcode: string
  ): Observable<{ lat: number; long: number }> {
    return this.http.get(`${this.postcodeBaseUrl}/postcodes/${postcode}`).pipe(
      map((response: any) => {
        if (response.result) {
          return {
            lat: response.result.latitude,
            long: response.result.longitude
          }
        } else {
          throw new Error('Invalid postcode')
        }
      })
    )
  }

  getFloodAreas(lat: number, long: number, dist: number): Observable<any> {
    return this.http
      .get(`${this.floodBaseUrl}/id/floodAreas`, {
        params: {
          lat: lat.toString(),
          long: long.toString(),
          dist: dist.toString()
        }
      })
      .pipe(map((response: any) => response.items || []))
  }
}
