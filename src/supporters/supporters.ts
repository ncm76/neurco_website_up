import { Component } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'app-supporters',
  imports: [],
  templateUrl: './supporters.html',
  styleUrl: './supporters.scss'
})
export class Supporters {

  logos = [
    { name: 'The Myer Foundation', path: 'Myer.png' },
    { name: 'MAP', path: 'assets/supporters/map.png' },
    { name: 'Melbourne Health Accelerator', path: 'assets/supporters/melbourne-health.png' },
    { name: 'ygap', path: 'assets/supporters/ygap.png' },
    { name: 'Albert Road Clinic', path: 'assets/supporters/albert-road.png' },
    { name: 'Export Hub', path: 'assets/supporters/export-hub.png' },
    { name: 'Central Clinic', path: 'assets/supporters/central-clinic.png' },
    { name: 'St John of God', path: 'assets/supporters/st-john.png' },
  ];
  

}
