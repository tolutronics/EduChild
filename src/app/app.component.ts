import { Component } from '@angular/core';
import {trigger, style, animate, transition, keyframes} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(5000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class AppComponent{

  title = 'EduChild';
}
