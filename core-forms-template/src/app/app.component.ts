import {Component, ElementRef} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSecret = 'pet';
  secretAnswer: string;

  genders = ['male', 'female'];


  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm) {
    console.log(`onSubmit event emmited ${form}`);
    console.log(form);
  }
}
