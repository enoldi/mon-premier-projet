import {Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ApparielService {

  apparielSubject = new Subject<any[]>();

 private appariels = [];

 constructor(private http: HttpClient) {}

  emitApparielSubject() {
    this.apparielSubject.next(this.appariels.slice());
  }

  getApparielById(id: number) {
    const appariel = this.appariels.find(
      (apparielOject) => {
        return apparielOject.id === id;
      }
    );

    return appariel;
  }

  switchOnAll() {
    for (let appariel of this.appariels) {
      appariel.status = 'allumer';
    }

    this.emitApparielSubject();
  }

  switchOffAll() {
    for (let appariel of this.appariels) {
      appariel.status = 'etient';
    }
    this.emitApparielSubject();
  }

  switchOnOne(index: number) {
    this.appariels[index].status = 'allumer';
    this.emitApparielSubject();
  }

  switchOffOne(index: number) {
    this.appariels[index].status = 'etient';
    this.emitApparielSubject();
  }

  addAppariel(name: string, status: string) {
    const apparielObject = {
      id: 0,
      name: '',
      status: ''
    };

    apparielObject.name = name;
    apparielObject.status = status;
    apparielObject.id = this.appariels[(this.appariels.length - 1)].id + 1;
    this.appariels.push(apparielObject);
    this.emitApparielSubject();
  }

  saveApparielsToServer() {
   this.http.put('https://https-appariels-demo.firebaseio.com/appariels.json', this.appariels)
            .subscribe(
              () => {
                console.log('Enregistrement termine!');
              },
              (error) => {
                console.log('Erreur lors de l\'enregistrement : ' + error );
              }
            );
  }

  getApparrielsToServer() {
   this.http.get<any []>('https://https-appariels-demo.firebaseio.com/appariels.json')
            .subscribe(
              (response) => {
                this.appariels = response;
                this.emitApparielSubject();
              },
              (error) => {
                console.log('Erreur de chargement !' + error);
              }
            );
  }
}
