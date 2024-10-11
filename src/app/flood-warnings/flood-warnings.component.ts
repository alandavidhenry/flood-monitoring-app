import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { FloodApiService } from '../services/flood-api.service'

@Component({
  selector: 'app-flood-warnings',
  templateUrl: './flood-warnings.component.html',
  styleUrls: ['./flood-warnings.component.scss']
})
export class FloodWarningsComponent {
  // Properties
  floodWarningData: any = {}
  private subscription!: Subscription

  // Inject service into constructor
  constructor(private floodApiService: FloodApiService) {}

  ngOnInit(): void {
    // Subscribe to data
    this.subscription = this.floodApiService.getFloodWarningToday().subscribe({
      next: (data) => {
        this.floodWarningData = data // Save to property
        console.log(data)
      },
      error: (error) => {
        console.error(error) // Log an error if data cannot be retrieved
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe() // Unsubscribe to prevent potential memory leaks
  }

  sortByLocation(): void {
    console.log('sort by location')
  }
  sortByCounty(): void {
    console.log('sort by county')
  }
  sortBySeverity(): void {
    console.log('sort by severity')
  }
  sortByTime(): void {
    console.log('sort by time')
  }
}
