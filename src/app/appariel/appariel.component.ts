import { Component, Input, OnInit } from '@angular/core';
import {ApparielService} from '../services/appariel.service';

@Component({
  selector: 'app-appariel',
  templateUrl: './appariel.component.html',
  styleUrls: ['./appariel.component.scss']
})
export class ApparielComponent implements OnInit {
   @Input() apparielName: string ;

  @Input() statusAppariel: string;

  @Input() indexOfAppariel: number;

  @Input() id: number;

  constructor(private apparielService: ApparielService) { }

  ngOnInit() {
  }

  getStatuts(): string {
    return this.statusAppariel;
  }

  getColor() {
    if (this.statusAppariel === 'etient') {
      return 'red';
    } else if (this.statusAppariel === 'allumer') {
      return 'green';
    }
  }

  onSwhitchOne() {
    this.apparielService.switchOnOne(this.indexOfAppariel);
  }

  offSwihtchOne() {
    this.apparielService.switchOffOne(this.indexOfAppariel);
  }

  onSwitch() {

    if (this.statusAppariel === 'allumer') {

      this.offSwihtchOne();

    } else if (this.statusAppariel === 'etient') {

      this.onSwhitchOne();

    }

  }

}
