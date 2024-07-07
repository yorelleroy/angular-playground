import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;
  @Input() user: string = '';
  @Input() size!: number;
  @Output() customEvent: EventEmitter<any> = new EventEmitter();
  @Output() sizeChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  openModal(): void {
    this.modal.nativeElement.showModal();
  }

  closeModal(): void {
    this.modal.nativeElement.close();
  }

  emitCustomEvent() {
    this.customEvent.emit();
  }

  increaseSize() {
    this.sizeChange.emit(this.size + 1);
  }

  decreaseSize() {
    this.sizeChange.emit(this.size - 1);
  }
}
