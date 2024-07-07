import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss',
})
export class InputOutputComponent {
  loggedInUser: string = 'Jerry';
  size: number = 12;

  customEventHandler() {
    window.alert('WOW');
  }
}
