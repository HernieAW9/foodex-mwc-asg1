import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {
  FormGroup,
  FormControl

} from '@angular/forms';


@Component({
  selector: 'page-sort',
  templateUrl: 'sort.html'
})
export class SortPage {

  langs;
  langForm;

  constructor() {
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }
}
