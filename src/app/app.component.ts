import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'flood-monitoring-app';

  ngOnInit(): void {
    initFlowbite(); // Initialise Flowbite CSS library for Tailwind CSS
  }
}