import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  myName: string = 'Roy';
  myAge: number = 18;
  inputValue: string = 'value from ts';
  isDisabled: boolean = false;
  customBgColor: string = '';
  customStyleClass: string = '';
  fruits: string[] = ['apple', 'orange', 'banana', 'strawberry'];

  public showAlert(inputValue: string = ''): void {
    if (inputValue) {
      window.alert(inputValue);
    } else [window.alert('input is blank!')];
  }

  public inputHandler(value: Event): void {
    const target = value.currentTarget as HTMLInputElement;
    console.log(target.value);
  }

  public enableInputHandler(): void {
    this.isDisabled = !this.isDisabled;
  }
}
