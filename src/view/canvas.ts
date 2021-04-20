// Demo of using HTML 5 canvas with Typescript
// Source: https://kernhanda.github.io/tutorial-typescript-canvas-drawing/

import {LocationType} from '../sim/location.js';
import {Simulation} from '../sim/simulation.js';

export class DrawingApp {
  private context: CanvasRenderingContext2D;
  // private paint: boolean = false;

  // private clickX: number[] = [];
  // private clickY: number[] = [];
  // private clickDrag: boolean[] = [];

  constructor(
      private readonly canvas: HTMLCanvasElement,
      private readonly sim: Simulation) {
    // TODO resolve the null
    const context = canvas.getContext('2d')!;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 1;

    this.canvas = canvas;
    this.context = context;

    this.redraw();
    // TODO: Implement user interactions (if needed)
    // this.createUserEvents();
  }

  public refresh(): void {
    this.redraw();
  }

  private redraw() {
    this.clearCanvas();

    const map = this.sim.getMap();
    const context = this.context;

    for (let i = 0; i < map.length; ++i) {
      for (let j = 0; j < map[i].length; ++j) {
        const loc = map[i][j];
        if (loc.type === LocationType.FOREST) {
          context.fillStyle = 'green';
        } else if (loc.type === LocationType.VILLAGE) {
          context.fillStyle = 'brown';
        } else if (loc.type === LocationType.ROAD) {
          context.fillStyle = 'yellow';
        }

        context.fillRect(i * 10 + 11, j * 10 + 11, 9, 9);
      }
    }
  }


  private clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.clickX = [];
    // this.clickY = [];
    // this.clickDrag = [];
  }

  // private createUserEvents() {
  //   let canvas = this.canvas;

  //   canvas.addEventListener('mousedown', this.pressEventHandler);
  //   canvas.addEventListener('mousemove', this.dragEventHandler);
  //   canvas.addEventListener('mouseup', this.releaseEventHandler);
  //   canvas.addEventListener('mouseout', this.cancelEventHandler);

  //   canvas.addEventListener('touchstart', this.pressEventHandler);
  //   canvas.addEventListener('touchmove', this.dragEventHandler);
  //   canvas.addEventListener('touchend', this.releaseEventHandler);
  //   canvas.addEventListener('touchcancel', this.cancelEventHandler);

  //   document.getElementById('clear')!.addEventListener(
  //       'click', this.clearEventHandler);
  // }

  // private addClick(x: number, y: number, dragging: boolean) {
  //   this.clickX.push(x);
  //   this.clickY.push(y);
  //   this.clickDrag.push(dragging);
  // }

  // private clearEventHandler =
  //     () => {
  //       this.clearCanvas();
  //     }

  // private releaseEventHandler =
  //     () => {
  //       this.paint = false;
  //       this.redraw();
  //     }

  // private cancelEventHandler =
  //     () => {
  //       this.paint = false;
  //     }

  // private pressEventHandler =
  //     (e: MouseEvent|TouchEvent) => {
  //       let mouseX = (e as TouchEvent).changedTouches ?
  //           (e as TouchEvent).changedTouches[0].pageX :
  //           (e as MouseEvent).pageX;
  //       let mouseY = (e as TouchEvent).changedTouches ?
  //           (e as TouchEvent).changedTouches[0].pageY :
  //           (e as MouseEvent).pageY;
  //       mouseX -= this.canvas.offsetLeft;
  //       mouseY -= this.canvas.offsetTop;

  //       this.paint = true;
  //       this.addClick(mouseX, mouseY, false);
  //       this.redraw();
  //     }

  // private dragEventHandler = (e: MouseEvent|TouchEvent) => {
  //   let mouseX = (e as TouchEvent).changedTouches ?
  //       (e as TouchEvent).changedTouches[0].pageX :
  //       (e as MouseEvent).pageX;
  //   let mouseY = (e as TouchEvent).changedTouches ?
  //       (e as TouchEvent).changedTouches[0].pageY :
  //       (e as MouseEvent).pageY;
  //   mouseX -= this.canvas.offsetLeft;
  //   mouseY -= this.canvas.offsetTop;

  //   if (this.paint) {
  //     this.addClick(mouseX, mouseY, true);
  //     this.redraw();
  //   }

  //   e.preventDefault();
  // }
}
