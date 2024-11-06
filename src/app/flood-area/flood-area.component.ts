import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FloodApiService } from '../services/flood-api.service'
import { Item } from '../models/flood'

@Component({
  selector: 'app-flood-area',
  templateUrl: './flood-area.component.html',
  styleUrls: ['./flood-area.component.scss']
})
export class FloodAreaComponent {
  postcode: string = ''
  distance: number = 10
  floodAreas: any[] = []
  sortColumn: string = ''
  sortDirection: 'asc' | 'desc' = 'asc'
  isLoading: boolean = false
  error: string | null = null
  postcodePattern: RegExp = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i
  distances: number[] = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 100, 200, 300, 400]

  constructor(
    private floodApiService: FloodApiService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.postcode && this.postcodePattern.test(this.postcode)) {
      this.isLoading = true
      this.error = null
      this.floodApiService.getCoordinatesFromPostcode(this.postcode).subscribe({
        next: (coords) => {
          this.fetchFloodAreas(coords.lat, coords.long)
        },
        error: (err) => {
          console.error('Error fetching coordinates:', err)
          this.error =
            'Failed to fetch coordinates. Please check the postcode and try again.'
          this.isLoading = false
        }
      })
    } else {
      this.error = 'Please enter a valid UK postcode.'
    }
  }

  fetchFloodAreas(lat: number, long: number) {
    this.floodApiService.getFloodAreas(lat, long, this.distance).subscribe({
      next: (areas) => {
        this.floodAreas = areas.map((item: any) => {
          return {
            description: item.label || '',
            floodArea: {
              county: item.county || ''
            },
            floodAreaID: item.notation || ''
          }
        })
        this.isLoading = false
      },
      error: (err) => {
        console.error('Error fetching flood areas:', err)
        this.error = 'Failed to fetch flood areas. Please try again.'
        this.isLoading = false
      }
    })
  }

  isValidPostcode(): boolean {
    return this.postcodePattern.test(this.postcode)
  }

  sortData(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
    } else {
      this.sortColumn = column
      this.sortDirection = 'asc'
    }

    this.floodAreas.sort((a, b) => {
      const valueA = this.getValue(a, column)
      const valueB = this.getValue(b, column)

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1
      return 0
    })
  }

  private getValue(item: Item, column: string): any {
    switch (column) {
      case 'location':
        return item.description
      case 'county':
        return item.floodArea.county.split(',')[0].trim()
      default:
        return ''
    }
  }

  sortByLocation(): void {
    this.sortData('location')
  }

  sortByCounty(): void {
    this.sortData('county')
  }
}
