import { Component } from '@angular/core'
import { FloodApiService } from '../services/flood-api.service'

@Component({
  selector: 'app-measurement-stations',
  templateUrl: './measurement-stations.component.html',
  styleUrls: ['./measurement-stations.component.scss']
})
export class MeasurementStationsComponent {
  // Rivers search term
  searchRivers: string = ''

  // To store returned data
  stations: any[] = []

  constructor(private stationService: FloodApiService) {}

  onSubmit() {
    this.stationService
      .getStationsSearchRiverName(this.searchRivers)
      .subscribe((data) => {
        this.stations = Object.values(data) // Assuming the API returns an array of stations
        console.log('Data:', data)
        console.log('Stations:', this.stations)
      })
  }
}
