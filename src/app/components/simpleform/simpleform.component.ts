import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  formData = {
    name: "",
    email: ""
  };

  submittedData = {
    name: "",
    email: ""
  };

  submitForm() {
    console.log(this.formData);
    this.submittedData = this.formData;
  }
}