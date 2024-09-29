import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-currencyconverter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  phpAmount: number = 0;
  dollarsAmount: number = 0;
  conversionRate: number = 56;

  convertToPhp() {
    this.phpAmount = this.dollarsAmount * this.conversionRate;
  }
}
