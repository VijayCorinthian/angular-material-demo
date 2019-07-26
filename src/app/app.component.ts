import { Component } from '@angular/core';
import { MockTravellers } from './mock-travellers';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mockTravellers = MockTravellers;  
  control = new FormControl('myControl');  
  email = new FormControl('', [Validators.required, Validators.email]);
  title = 'material2demo';
}
