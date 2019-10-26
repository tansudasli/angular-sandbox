import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) form: NgForm;

  defaultSecret = 'pet';
  secretAnswer: string;

  genders = ['male', 'female'];


  suggestUserName() {
    const suggestedName = 'Superuser';

    // the other way is using 1-way binding, but below approach is better! patchValue is the best :)

    // this.form.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   secretAnswer: 'n/a',
    //   gender: 'female'
    // });

    this.form.form.patchValue({
        userData: {
        username: suggestedName
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(`onSubmit event emmited ${form}`);
  //   console.log(form);
  // }

  onSubmit() {
    console.log(`onSubmit event emmited ${this.form}`);
    console.log(this.form);
  }

  onReset() {
    this.form.reset();
  }
}
