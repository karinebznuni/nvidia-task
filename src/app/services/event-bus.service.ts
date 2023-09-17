import { EventEmitter, Injectable } from '@angular/core';
import { WallParams } from '../components/n-wall/n-wall.component';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  constructor() { }

  drawWall = new EventEmitter<WallParams>();
}
