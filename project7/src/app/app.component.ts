import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    
})
export class AppComponent {
  @ViewChild ('form') form: NgForm;

  answers = [{
    type: 'yes',
    text: 'Yes'
  },{
    type: 'no',
    text: 'No'
  },{
    type: 'maybe',
    text: 'Maybe'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'ua';

  addRandEmail () {
    const randEmail = 'wfm@gmail.com';
    this.form.setValue({
      user: {
        pass: '',
        email: randEmail
      },
      country: '',
      answer: ''
    });
  }

  submitForm(){
    console.log('Submited!', this.form);
  }
}
//<form (ngSubmit)="submitForm(form)" #form="ngForm">