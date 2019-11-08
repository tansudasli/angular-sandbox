import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  signupForm: FormGroup;

  genders = ['male', 'female'];
  forbiddenUserNames = ['ali', 'veli', 'deli'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),

    });
  }

  onSubmit() {
    // same form group in template-driven. controls, value etc..
    console.log(this.signupForm);
  }

  /**
   * custom validator
   *
   * @param control formControl
   */
  forbiddenNames(control: FormControl): {[s: string]: boolean} {

    if (this.forbiddenUserNames.indexOf(control.value) !== -1 ) {
      return {'nameIsForbidden': true};
    }

    return null;
  }

}
