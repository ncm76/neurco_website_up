import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Homepage } from '../pages/homepage/homepage';
import { Aboutpage } from '../pages/aboutpage/aboutpage';
 import { Headernav } from '../headernav/headernav';
 import { Footer } from '../footer/footer';
import { Workpage } from "../pages/workpage/workpage";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  Headernav, Footer, Aboutpage,Workpage,Homepage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('NeuroCo');
}
