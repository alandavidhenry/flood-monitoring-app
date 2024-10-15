import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FloodApiService } from '../services/flood-api.service'
import { Item } from '../models/flood'

@Component({
  selector: 'app-flood-warning-details',
  templateUrl: './flood-warning-details.component.html',
  styleUrls: ['./flood-warning-details.component.scss']
})
export class FloodWarningDetailsComponent implements OnInit {
  floodWarning: Item | null = null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private floodApiService: FloodApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const floodAreaID = params.get('id')
      if (floodAreaID) {
        this.floodApiService.getFloodWarningDetails(floodAreaID).subscribe({
          next: (data: Item) => {
            this.floodWarning = data
          },
          error: (error) => {
            console.error('Error fetching flood warning details:', error)
          }
        })
      } else {
        this.router.navigate(['/flood-warnings'])
      }
    })
  }
}
