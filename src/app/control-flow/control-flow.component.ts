import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
})
export class ControlFlowComponent {
  fruits: string[] = ['apple', 'orange', 'banana', 'strawberry'];
  myName: string = 'Roy';
}
