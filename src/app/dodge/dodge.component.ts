import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dodge',
  templateUrl: './dodge.component.html',
  styleUrls: ['./dodge.component.css']
})
export class DodgeComponent implements OnInit {
  constructor() {}

  public show;
  public showDrone;
  public score: any;
  public droneX;
  public droneY;

  x: number = 0;
  y: number = 0;

  startX: number = 0;
  startY: number = 0;

  ngOnInit() {
    this.initValues();
  }

  initValues() {
    this.show = false;
    this.score = 0;
    this.x = 0;
    this.y = 0;

    this.startX = 0;
    this.startY = 0;
  }
  initDrone() {
    this.droneY = Math.floor(Math.random() * 700) + 1;
    this.droneX = Math.floor(Math.random() * 300) + 1;
    this.showDrone = false;
  }
  onPanStart(event: any): void {
    this.startX = this.x;
    this.startY = this.y;
  }

  onPan(event: any): void {
    this.showDrone = true;
    this.score = this.score + 10;

    this.droneY = Math.floor(Math.random() * 700) + 1;
    this.droneX = Math.floor(Math.random() * 300) + 1;

    event.preventDefault();
    this.x = this.startX + event.deltaX;
    this.y = this.startY + event.deltaY;
    if (this.y == this.droneY || this.x == this.droneX) {
      this.gameOver();
    }
  }

  start() {
    this.initDrone();
    this.score = 0;
    this.showDrone = true;
    this.show = !this.show;
  }

  gameOver() {
    alert('Game Over, you hit a drone');
    this.x = this.droneX;
    this.y = this.droneY;
  }

  showDroneFn() {
    this.showDrone = !this.showDrone;
  }
}
