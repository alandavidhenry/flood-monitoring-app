import { Component } from '@angular/core'
import { FloodApiService } from '../services/flood-api.service'

@Component({
  selector: 'app-measurement-stations',
  templateUrl: './measurement-stations.component.html',
  styleUrls: ['./measurement-stations.component.scss']
})
export class MeasurementStationsComponent {
  searchRivers: string = ''

  stations: any[] = []

  constructor(private stationService: FloodApiService) {}

  onSubmit() {
    this.stationService
      .getStationsSearchRiverName(this.searchRivers)
      .subscribe((data) => {
        this.stations = Object.values(data)
        console.log('Data:', data)
        console.log('Stations:', this.stations)
      })
  }
}
