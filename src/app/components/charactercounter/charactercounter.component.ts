import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-charactercounter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './charactercounter.component.html',
  styleUrl: './charactercounter.component.css'
})
export class CharactercounterComponent {
  character: string = "";
  characterCount: number = 0;

  counter() {
    this.characterCount = this.character.length;
  }

}
