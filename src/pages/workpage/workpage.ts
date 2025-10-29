import { Component } from '@angular/core';
import { Approach } from '../../approach/approach';
import { Productfeatures } from '../../productfeatures/productfeatures';
import { Supporters } from '../../supporters/supporters';

@Component({
  selector: 'app-workpage',
  imports: [Approach,Productfeatures,Supporters],
  templateUrl: './workpage.html',
  styleUrl: './workpage.scss'
})
export class Workpage {

}
