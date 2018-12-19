import { Component, OnInit } from '@angular/core';
import {ApparielService} from '../services/appariel.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appariel-view',
  templateUrl: './appariel-view.component.html',
  styleUrls: ['./appariel-view.component.scss']
})
export class ApparielViewComponent implements OnInit {

  isAuth = false;

  lastUpdate = new Promise(
    (resolve => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    })
  );

  appariels: any[];
  apparielSubcription: Subscription;

  constructor(private apparielService: ApparielService ) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000);
  }

  ngOnInit(): void {
    this.apparielSubcription = this.apparielService.apparielSubject.subscribe(
      (appariels: any[]) => {
        this.appariels = appariels;
      }
    );

    this.apparielService.emitApparielSubject();
  }

  onAllumer() {
    this.apparielService.switchOnAll();
  }

  onEtiendre() {
    this.apparielService.switchOffAll();
  }

  onSave() {
    this.apparielService.saveApparielsToServer();
  }

  onFecth() {
    this.apparielService.getApparrielsToServer();
  }

}
