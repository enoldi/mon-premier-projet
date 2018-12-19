import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {ApparielService} from '../services/appariel.service';

@Component({
  selector: 'app-single-appariel',
  templateUrl: './single-appariel.component.html',
  styleUrls: ['./single-appariel.component.scss']
})
export class SingleApparielComponent implements OnInit {

  name: string = 'Appariel';
  statuts: string = 'etient';

  constructor(private apparielService: ApparielService, private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.name = this.apparielService.getApparielById(+id).name;
    this.statuts = this.apparielService.getApparielById(+id).status;
  }

}
