import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-vid',
  templateUrl: './car-vid.component.html',
  styleUrls: ['./car-vid.component.css']
})
export class CarVidComponent {

  constructor(public router:Router){}
  
  showPayButton=false;
  onEnd()
  {
    this.showPayButton=true;
  }

  
  payments() {
    this.router.navigate(['payment'])
  }

}
