const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
};
// degrees to radius Calculation
// const degToRad = (degrees) => {
//   return (degrees / 180) * Math.PI;
// };
// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// };
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01;
    const h = height * 0.3;
    let x, y;

    const num = 40;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.2, 3), random.range(0.2, 0.5));

      context.fillStyle = "darkred";

      context.beginPath();
      // context.fillRect(-w / 2, -h / 2, w, h);
      context.fillRect(-w * 0.7, random.range(0, -h * 0.9), w, h);
      context.fill();
      context.restore();
      // new .save()/.translate()/.restore()
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(3, 25);

      context.beginPath();
      context.arc(
        0,
        0,
        radius * random.range(0.7, 1.3),
        slice * random.range(1, -8),
        slice * random.range(1, 5)
      );
      context.stroke();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);

// cd into folder then run:
//npx canvas-sketch-cli sketchClock.js --open