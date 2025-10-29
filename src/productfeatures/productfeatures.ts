import { Component } from '@angular/core';
import {  MatCardModule } from '@angular/material/card';
import {  MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-productfeatures',
  imports: [MatGridListModule, MatCardModule],
  templateUrl: './productfeatures.html',
  styleUrl: './productfeatures.scss'
})
export class Productfeatures {
  products = [
    { image: 'projects/Global_stratergy.png', caption: 'EMBRACE GLOBAL STRATEGIES TO IMPROVE MENTAL HEALTH' },
    { image: 'projects/Values.png', caption: 'BRING VALUE TO STAKEHOLDERS' },
    { image: 'projects/Holistic.png', caption: 'EMBRACE A HOLISTIC PERSPECTIVE TO ENHANCE SUPPORT' },
    { image: 'projects/Impacts.png', caption: 'PRODUCTISATION TOWARDS SIGNIFICANT IMPACT' }
  ];

}
