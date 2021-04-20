import {DrawingApp} from './canvas/canvas.js';
import {Simulation} from './simulation.js';

const sim = new Simulation();

const canvas = document.getElementsByTagName('canvas')[0];

const drawingApp = new DrawingApp(canvas, sim);

sim.init();

sim.step();
drawingApp.refresh();
sim.step();
drawingApp.refresh();
sim.step();
drawingApp.refresh();
