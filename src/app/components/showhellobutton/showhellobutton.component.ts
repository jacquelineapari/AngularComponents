import { Component } from '@angular/core';

@Component({
  selector: 'app-showhellobutton',
  
  templateUrl: './showhellobutton.component.html',
  styleUrl: './showhellobutton.component.css'
})
export class ShowhellobuttonComponent {
   greetings: string = "";

  displayGreetings() {
    this.greetings = "Hello World"
  }
}
