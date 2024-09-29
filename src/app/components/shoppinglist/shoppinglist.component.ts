import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shoppinglist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
  newItem: string = '';
  shoppingList: string[] = [];

  addItem() {
    if (this.newItem.trim() !== '') {
      this.shoppingList.push(this.newItem);
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.shoppingList.splice(index, 1);
  }
}