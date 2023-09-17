import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WallParams } from '../n-wall/n-wall.component';
import { EventBusService } from 'src/app/services/event-bus.service';

@Component({
  selector: 'app-n-form',
  templateUrl: './n-form.component.html',
  styleUrls: ['./n-form.component.scss'],
})
export class NFormComponent {
  wallForm = this.fb.group({
    width: [10, Validators.required],
    height: [10, Validators.required],
    colorsCount: [2, Validators.required],
  });

  constructor(private fb: FormBuilder, private evBus: EventBusService) {}

  drawWall() {
    if (!this.wallForm.valid) {
      return alert('All inputs required');
    }
    const wallParams = this.wallForm.value as WallParams;
    this.evBus.drawWall.emit(wallParams);
  }
}
