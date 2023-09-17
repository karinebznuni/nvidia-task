import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brick } from '../n-wall/n-wall.component';

@Component({
  selector: 'app-n-brick',
  templateUrl: './n-brick.component.html',
  styleUrls: ['./n-brick.component.scss'],
})
export class NBrickComponent {
  @Input({ required: true }) brick!: Brick;
  @Output() invert = new EventEmitter<Brick>();
}
