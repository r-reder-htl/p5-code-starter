import { p } from './index';

export function setup() {
  // Diese Funktion wird einmal beim Programmstart aufgerufen.
  // https://p5js.org/reference/#/p5/setup
  p.createCanvas(700, 500);
}

export function preload() {
  // Diese Funktion wird vor `setup` aufgerufen. Wir verwenden sie,
  // um z.B. Bilder zu laden.
  // https://p5js.org/reference/#/p5/preload
}

export function keyPressed() {
  // Diese Funktion wird aufgerufen, wenn eine Taste gedrückt wird.
  // https://p5js.org/reference/#/p5/keyPressed
  console.log(`Key ${p.keyCode} has been pressed`);
}

export function mousePressed() {
  // Diese Funktion wird aufgerufen, wenn die Mause geklickt wird.
  // https://p5js.org/reference/#/p5/mousePressed
  console.log(`Mouse was pressed at ${p.mouseX}/${p.mouseY}`);
}

export function draw() {
  // Diese Funktion wird aufgerufen, wenn der Bildschirm aktualisiert
  // werden muss.
  // https://p5js.org/reference/#/p5/draw
  p.background('yellow');

  // Beispiel für Aufruf einer Hilfsfunktion in einer anderen Datei.
  p.stroke('red');
  p.fill('green');
  p.rect(0, 0, 40, 40);
}
