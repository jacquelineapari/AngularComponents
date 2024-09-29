import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-displayname',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './displayname.component.html',
  styleUrl: './displayname.component.css'
})
export class DisplaynameComponent {
  name: string = "";
  displayedname: string = "";
  

  show() {
    console.log(this.name);
    this.displayedname = this.name
  }
}
