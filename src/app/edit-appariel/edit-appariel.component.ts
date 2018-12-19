import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApparielService} from '../services/appariel.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-appariel',
  templateUrl: './edit-appariel.component.html',
  styleUrls: ['./edit-appariel.component.scss']
})
export class EditApparielComponent implements OnInit {

  defaultOnOff = 'etient';

  constructor(private apparielService: ApparielService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];

    this.apparielService.addAppariel(name, status);
    this.router.navigate(['/appariels']);
  }

}
