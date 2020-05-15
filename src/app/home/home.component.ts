import { Component, OnInit, ViewChild } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {trigger, style, animate, transition, keyframes} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(3000, style({opacity: 1}))
      ]) 
    ]),
    trigger('bounce', [
  
      transition('void=> *', [
        animate('3s', keyframes([
          style({ transform: 'scale(1,1) translateY(0)' }),
          style({ transform: 'scale(1.1, 0.9) translateY(0)' }),
          style({ transform: 'scale(0.9, 1.1) translateY(-100px)' }),
          style({ transform: 'scale(1.05, 0.95) translateY(0)' }),
          style({ transform: 'scale(1,1) translateY(-7px)' }),
          style({ transform: 'scale(1,1) translateY(0)' }),
        ]))
      ])
    ])
  ]

})
export class HomeComponent implements OnInit {
  breakpoint: number;
  public isMobile: boolean = false;
  constructor(breakpointObserver: BreakpointObserver) {

    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
   }

  ngOnInit() {
 
    
  }
  


}
