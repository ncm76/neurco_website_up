import { Component } from '@angular/core';
import { Vision } from '../../vision/vision';
import { Recognitions } from '../../recognitions/recognitions';
import { Team } from '../../team/team';
import { Supporters } from '../../supporters/supporters';


@Component({
  selector: 'app-aboutpage',
  imports: [Vision, Recognitions, Team, Supporters],
  templateUrl: './aboutpage.html',
  styleUrl: './aboutpage.scss'
})
export class Aboutpage {

}
