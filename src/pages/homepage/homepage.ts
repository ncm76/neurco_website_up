import { Component } from '@angular/core';
import { Hero } from '../../hero/hero';
import { Footer } from '../../footer/footer';
import { Headernav } from '../../headernav/headernav';
import { Advantages } from '../../advantages/advantages';
import { Testimonals } from '../../testimonals/testimonals';
import { Supporters } from '../../supporters/supporters';

@Component({
  selector: 'app-homepage',
  imports: [Hero, Advantages, Testimonals,Supporters],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

}
