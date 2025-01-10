import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-home-component',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @Output() public buttonClicked = new EventEmitter<void>();
}
