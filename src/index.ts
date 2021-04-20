import {Simulation} from './sim/simulation.js';
import {DrawingApp} from './view/canvas.js';

const sim = new Simulation();

const canvas = document.getElementsByTagName('canvas')[0];

const drawingApp = new DrawingApp(canvas, sim);

sim.init();
drawingApp.refresh();

function step() {
  sim.step();
  drawingApp.refresh();
  console.log(sim.getTurnCount());
}

document.getElementById('step-button')!.addEventListener('click', step);
