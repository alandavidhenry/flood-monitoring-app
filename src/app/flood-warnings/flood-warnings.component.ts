import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { FloodApiService } from '../services/flood-api.service'
import { Item } from '../models/flood'

@Component({
  selector: 'app-flood-warnings',
  templateUrl: './flood-warnings.component.html',
  styleUrls: ['./flood-warnings.component.scss']
})
export class FloodWarningsComponent implements OnInit {
  floodWarningData: Item[] = []
  private subscription!: Subscription
  sortColumn: string = ''
  sortDirection: 'asc' | 'desc' = 'asc'

  constructor(
    private floodApiService: FloodApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.floodApiService.getFloodWarningToday().subscribe({
      next: (data: any) => {
        this.floodWarningData = data.items
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  sortData(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
    } else {
      this.sortColumn = column
      this.sortDirection = 'asc'
    }

    this.floodWarningData.sort((a, b) => {
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
      case 'severity':
        return item.severityLevel
      case 'time':
        return new Date(item.timeRaised).getTime()
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

  sortBySeverity(): void {
    this.sortData('severity')
  }

  sortByTime(): void {
    this.sortData('time')
  }

  onRowClick(item: Item): void {
    const url = `/flood-warning-details/${item.floodAreaID}`
    this.router.navigateByUrl(url)
  }
}
