function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let cnv = createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  angleMode(DEGREES);
}
// The same as doing: background(220); or --> background(220,220,220);
function draw() {
  background("#ffffff");
  translate(width / 2, height / 2);
  rotate(-90);
  let hours = hour();
  let minutes = minute();
  let seconds = second();
  let millisecond = millis() / 10;

  console.log(`${hours}:${minutes}:${seconds}`);
  stroke("#000000");
  strokeWeight(8);
  noFill();
  ellipse(0, 0, 300, 300);

  let secondAngle = map(seconds, 0, 60, 0, 360);
  fill(0, 100, 100, 150);
  arc(0, 0, 250, 250, 0, secondAngle, PIE);
  noFill();
  push();
  rotate(secondAngle);
  stroke("#32AB52");
  pop();
  let minuteAngle = map(minutes, 0, 60, 0, 360) + map(seconds, 0, 60, 0, 6);

  let hourAngle = map(hours % 12, 0, 12, 0, 360);

  stroke("#184e77");
  arc(0, 0, 250, 250, 0, secondAngle);

  stroke("#1a759f");
  arc(0, 0, 200, 200, 0, minuteAngle);

  stroke("#34a0a4");
  arc(0, 0, 150, 150, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke("#184e77");
  line(0, 0, 125, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("#1a759f");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("#34a0a4");
  line(0, 0, 75, 0);
  pop();

  push();
  let M = 3;
  textSize(32);
  rotate(90);
  text(M.toString(), 150, 0);
  pop();

  let millisAngle = map(millisecond, 0, 100, 0, 360);

  stroke("#168aad");
  strokeWeight(4);
  arc(0, 0, 70, 70, 0, millisAngle);

  push();
  rotate(millisAngle);
  stroke("#168aad");
  strokeWeight(4);
  line(0, 0, 35, 0);
  pop();
}
