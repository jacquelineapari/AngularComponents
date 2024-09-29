import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currencyformatter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
  amount: number | null = null; 
  formattedDollar: string | null = null; 
  formattedPhp: string | null = null; 
  formattedEuro: string | null = null; 

  formatCurrency() {
    if (this.amount !== null) {
      this.formattedDollar = this.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      this.formattedPhp = this.amount.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' });
      this.formattedEuro = this.amount.toLocaleString('en-EU', { style: 'currency', currency: 'EUR' });
    } else {
      this.formattedDollar = null;
      this.formattedPhp = null;
      this.formattedEuro = null;
    }
  }
}