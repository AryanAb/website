import React from "react";
import dynamic from "next/dynamic";

const ReactP5Wrapper = dynamic(
  () => import("react-p5-wrapper").then((mod) => mod.ReactP5Wrapper),
  { ssr: false }
);

const Conway = () => {
  function sketch(p5) {
    const SIDE_LENGTH = 600;
    const NUM_GRID = 30;
    const GRID_LENGTH = SIDE_LENGTH / NUM_GRID;

    let matrix = [];

    function getNeighbour(i, j) {
      if (i < 0 || j < 0 || i >= NUM_GRID || j >= NUM_GRID) {
        return false;
      }
      return matrix[i][j];
    }

    function applyRules() {
      let new_matrix = matrix.map((arr) => arr.slice());
      for (let i = 0; i < NUM_GRID; ++i) {
        for (let j = 0; j < NUM_GRID; ++j) {
          let population = 0;
          for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
              if (x == 0 && y == 0) {
                continue;
              }
              if (getNeighbour(i + x, j + y)) {
                population++;
              }
            }
          }

          if (population < 2) {
            new_matrix[i][j] = false;
          } else if (population == 3 && !matrix[i][j]) {
            new_matrix[i][j] = true;
          } else if (population > 3) {
            new_matrix[i][j] = false;
          }
        }
      }
      matrix = new_matrix;
    }

    p5.mouseClicked = () => {
      console.log(p5.mouseX, p5.mouseY);
      if (
        p5.mouseX > 0 &&
        p5.mouseX < SIDE_LENGTH &&
        p5.mouseY > 0 &&
        p5.mouseY < SIDE_LENGTH
      ) {
        const i = Math.floor(p5.mouseX / GRID_LENGTH);
        const j = Math.floor(p5.mouseY / GRID_LENGTH);
        matrix[i][j] = !matrix[i][j];
      }
    };

    p5.setup = () => {
      p5.createCanvas(SIDE_LENGTH, SIDE_LENGTH);
      for (let i = 0; i < NUM_GRID; i++) {
        matrix.push([]);
        for (let j = 0; j < NUM_GRID; j++) {
          matrix[i].push(Math.random() < 0.5);
        }
      }
    };

    p5.draw = () => {
      p5.background(220);

      // draw grid lines
      for (let x = 0; x <= SIDE_LENGTH; x += SIDE_LENGTH / NUM_GRID) {
        for (let y = 0; y <= SIDE_LENGTH; y += SIDE_LENGTH / NUM_GRID) {
          p5.stroke(0);
          p5.strokeWeight(1);
          p5.line(x, 0, x, SIDE_LENGTH);
          p5.line(0, y, SIDE_LENGTH, y);
        }
      }

      p5.fill("black");
      p5.noStroke();
      p5.frameRate(2);
      applyRules();
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
          if (matrix[i][j]) {
            p5.square(i * GRID_LENGTH, j * GRID_LENGTH, GRID_LENGTH);
          }
        }
      }
    };
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default Conway;
