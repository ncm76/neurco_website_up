import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-advantages',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './advantages.html',
  styleUrl: './advantages.scss'
})
export class Advantages {

}
