import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  loginForm: FormGroup;
  constructor(private _fb: FormBuilder) {}
  ngOnInit() {
    this.loginForm = this._fb.group({
      name: [''],
      email: [''],
    });
  }
  login() {
    console.log(this.loginForm.controls['name'].value);
  }
}
