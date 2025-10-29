import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-headernav',
  imports: [MatButtonModule, RouterLink ],
  templateUrl: './headernav.html',
  styleUrl: './headernav.scss'
})
export class Headernav {

}
