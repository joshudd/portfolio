'use client'
import React from "react";
import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return {"r": r, "g": g, "b": b};
}

const home_sketch: Sketch = (p) => {
  let backgroundColor: {r: number, g: number, b: number}, backgroundColordarker: {r: number, g: number, b: number}, textColor: {r: number, g: number, b: number};
  let width: number, height: number;
  let canvas: any;

  p.setup = () => {
    updateDimensions();
    updateColors();

    canvas = p.createCanvas(width, height).position(0, 0);
    // p.createCanvas(p.width, p.height, p.WEBGL).parent(parent);

    p.noStroke();
    p.background(backgroundColor.r, backgroundColor.g, backgroundColor.b);

    p.x_position = p.windowWidth; // * 0.1;
    p.y_position = 0;

    // time letiables
    p.t = Math.random()*10;
    p.tInt = 0.002;

    // noise letiables
    p.rez = 0.002;
    p.radi = 4 / p.rez;
    p.dim = 3;

    p.try = 0;
  }

  p.draw = () => {
    p.background(backgroundColor.r, backgroundColor.g, backgroundColor.b);

    // p.translate(width / 2.0, height / 2.0);
    // p.translate(p.x_position, p.y_position);
    
    let mouse_distance;
    let horizontal_distance;
    for (let y = 0; y < p.height; y += p.dim) {
      for (let x = 0; x < p.width; x += p.dim) {
        // get distance from mouse
        mouse_distance = Math.sqrt(Math.pow(p.mouseX - x, 2) + Math.pow(p.mouseY - y, 2));
        // horizontal_distance = Math.abs(p.mouseX - x);

        // get color value
        let n = p.fract(255 * p.noise(p.rez * x, p.rez * y, p.t) / 70); // gets the noise
        let old_n = n;

        if (mouse_distance < p.radi) {
          // n = n + 1 * Math.pow(Math.abs(p.radi - horizontal_distance) / p.radi, 3)
          n += 0.25 * (1 - Math.log(mouse_distance  / 1000.0) / (mouse_distance/10));
          if (n > 0.9) {
            n = n * (10.0 * 1 - Math.log(mouse_distance  / 1000.0) / mouse_distance);
          }
        }

        


        // color based on n value
        if (n > 0.8) {
          p.fill(textColor.r+50, textColor.g, textColor.b, old_n*150);
        } else {
          p.fill(backgroundColor.r, backgroundColor.g, backgroundColor.b)
        }

        // p.fill(backgroundColordarker.r, backgroundColordarker.g, backgroundColordarker.b, n*25)

        p.rect(x, y, p.dim);
      }
    }

    // increment time
    p.t += p.tInt;
  }

  p.windowResized = () => {
    updateDimensions();
    p.resizeCanvas(width, height)
    canvas.position(0, 0);
  }

  function updateColors() {
    const style = getComputedStyle(document.documentElement);
    backgroundColor = hexToRgb(style.getPropertyValue('--background-color').trim());

    backgroundColordarker = {...backgroundColor, r: backgroundColor.r - 50, g: backgroundColor.g - 50, b: backgroundColor.b - 60};
    textColor = hexToRgb(style.getPropertyValue('--text-color').trim());
  }

  function updateDimensions() {
    width = 96;
    height = 96;
  }
}

const about_sketch: Sketch = (p) => {
  let backgroundColor: {r: number, g: number, b: number}, backgroundColordarker: {r: number, g: number, b: number}, textColor: {r: number, g: number, b: number};
  let width: number, height: number;
  let canvas: any;

  p.setup = () => {
    updateDimensions();
    updateColors();

    canvas = p.createCanvas(width, height).position(p.windowWidth/2, p.windowHeight/2 + height/2);
    // p.createCanvas(p.width, p.height, p.WEBGL).parent(parent);

    p.noStroke();
    p.background(backgroundColor.r, backgroundColor.g, backgroundColor.b);

    p.x_position = p.windowWidth; // * 0.1;
    p.y_position = 0;

    // time letiables
    p.t = 0.0;
    p.tInt = 0.002;

    // noise letiables
    p.rez = 0.002;
    p.radi = 4 / p.rez;
    p.dim = 5;

    p.try = 0;
  }

  p.draw = () => {
    p.background(backgroundColor.r, backgroundColor.g, backgroundColor.b);

    // p.translate(width / 2.0, height / 2.0);
    // p.translate(p.x_position, p.y_position);
    
    let mouse_distance;
    let horizontal_distance;
    for (let y = 0; y < p.height; y += p.dim) {
      for (let x = 0; x < p.width; x += p.dim) {
        // get distance from mouse
        mouse_distance = Math.sqrt(Math.pow(p.mouseX - x, 2) + Math.pow(p.mouseY - y, 2));
        // horizontal_distance = Math.abs(p.mouseX - x);

        // get color value
        let n = p.fract(255 * p.noise(p.rez * x, p.rez * y, p.t) / 70); // gets the noise
        let old_n = n;

        if (mouse_distance < p.radi) {
          // n = n + 1 * Math.pow(Math.abs(p.radi - horizontal_distance) / p.radi, 3)
          n += 0.25 * (1 - Math.log(mouse_distance  / 1000.0) / (mouse_distance/10));
          if (n > 0.9) {
            n = n * (10.0 * 1 - Math.log(mouse_distance  / 1000.0) / mouse_distance);
          }
        }

        


        // color based on n value
        if (n > 0.8) {
          p.fill(textColor.r+50, textColor.g, textColor.b, old_n*150);
        } else {
          p.fill(backgroundColor.r, backgroundColor.g, backgroundColor.b)
        }

        // p.fill(backgroundColordarker.r, backgroundColordarker.g, backgroundColordarker.b, n*25)

        p.rect(x, y, p.dim);
      }
    }

    // increment time
    p.t += p.tInt;
  }

  p.windowResized = () => {
    updateDimensions();
    p.resizeCanvas(width, height)
    canvas.position(p.windowWidth/2, p.windowHeight/2 + height/2);
  }

  function updateColors() {
    const style = getComputedStyle(document.documentElement);
    backgroundColor = hexToRgb(style.getPropertyValue('--background-color').trim());

    backgroundColordarker = {...backgroundColor, r: backgroundColor.r - 50, g: backgroundColor.g - 50, b: backgroundColor.b - 60};
    textColor = hexToRgb(style.getPropertyValue('--text-about-color').trim());
  }

  function updateDimensions() {
    width = p.windowWidth/4;
    height = p.windowHeight/4;
  }
}

export const Ripples: React.FC<{view: string}> = ({ view }) => {
  if (view === "home") {
    return <NextReactP5Wrapper sketch={home_sketch} />;
  } else if (view === "about") {
    return <NextReactP5Wrapper sketch={about_sketch} />;
  }
}

export default Ripples;
