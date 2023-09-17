import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/services/event-bus.service';

export type WallParams = {
  width: number;
  height: number;
  colorsCount: number;
};

export type Brick = {
  color: string;
  inverted: boolean;
  posX: number;
  posY: number;
};

@Component({
  selector: 'app-n-wall',
  templateUrl: './n-wall.component.html',
  styleUrls: ['./n-wall.component.scss'],
})
export class NWallComponent implements OnInit {
  constructor(private evBus: EventBusService) {}

  matrix: Brick[][] = [];

  // source from: https://css-tricks.com/snippets/javascript/random-hex-color/
  private randColor() {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${color}`;
  }

  private initMatrix(count: number, width: number, height: number) {
    const randColors: string[] = [];
    while (count--) {
      randColors.push(this.randColor());
    }
    const getRandColor = () =>
      randColors[Math.floor(Math.random() * randColors.length)];

    const matrix = [];
    for (let i = 0; i < height; i++) {
      const row: Brick[] = [];
      for (let j = 0; j < width; j++) {
        row.push({
          color: getRandColor(),
          posX: i,
          posY: j,
          inverted: false,
        });
      }
      matrix.push(row);
    }
    this.matrix = matrix;
  }

  invertBrick(brick: Brick) {
    const { posX, posY, color } = brick;
    const verticalBricks = this.matrix.map((row) => {
      // should be inverted once
      if (row[posY] === brick) {
        return null;
      }
      return row[posY];
    }).filter(Boolean) as Brick[];
    const horizontalBricks = this.matrix[posX];

    verticalBricks.forEach((brick) => {
      if (brick.color === color) {
        brick.inverted = !brick.inverted;
      }
    });
    horizontalBricks.forEach((brick) => {
      if (brick.color === color) {
        brick.inverted = !brick.inverted;
      }
    });
  }

  ngOnInit(): void {
    this.evBus.drawWall.subscribe(({ colorsCount, height, width }) => {
      this.initMatrix(colorsCount, width, height);
    });
  }
}
