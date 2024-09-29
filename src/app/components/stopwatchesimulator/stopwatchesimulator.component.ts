import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatchesimulator',
  standalone: true,
  imports: [],
  templateUrl: './stopwatchesimulator.component.html',
  styleUrl: './stopwatchesimulator.component.css'
})
export class StopwatchesimulatorComponent {
  time: number = 0;
  interval: any = null;
  running: boolean = false;

  startTimer() {
    if (!this.running) {
      this.interval = setInterval(() => {
        this.time++;
      }, 1000);
      this.running = true;
    }
  }

  pauseTimer() {
    if (this.running) {
      clearInterval(this.interval);
      this.running = false;
    }
  }

  resetTimer() {
    this.pauseTimer();
    this.time = 0;
  }
}