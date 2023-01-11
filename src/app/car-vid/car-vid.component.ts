import { Component } from '@angular/core';

@Component({
  selector: 'app-car-vid',
  templateUrl: './car-vid.component.html',
  styleUrls: ['./car-vid.component.css']
})
export class CarVidComponent {

  showPayButton=false;
  onEnd()
  {
    this.showPayButton=true;
  }
}
