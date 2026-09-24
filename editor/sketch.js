// start fresh
export const receipt = {
  height: 600,
  seed: 42,
};

export function drawReceipt(p) {
  const { width: w } = p;
  const margin = 20;

  p.background(255);

  // header
  drawHackClubFlag(p, margin, 24, 76, 40);

  p.fill(0);
  p.noStroke();
  p.textFont("monospace");
  p.textAlign(p.RIGHT, p.CENTER);
  p.textStyle(p.BOLD);
  p.textSize(19);
  p.text("YOURFIYAN", w - margin, 36);

  p.textSize(9);
  p.textStyle(p.NORMAL);
  p.text("GENERATIVE PORTRAIT • #" + receipt.seed, w - margin, 52);

  p.stroke(0);
  p.strokeWeight(2);
  p.line(margin, 74, w - margin, 74);

  // bottom scale
  p.stroke(0);
  p.strokeWeight(2);
  p.line(margin, 525, w - margin, 525);

  p.strokeWeight(1);
  for (let x = margin; x <= w - margin; x += 6) {
    const isMajor = (x - margin) % 30 === 0;
    const tickH = isMajor ? 6 : 3;
    p.line(x, 525, x, 525 + tickH);
  }

  // footer text
  p.noStroke();
  p.fill(0);
  p.textAlign(p.LEFT, p.BOTTOM);
  p.textFont("monospace");
  p.textSize(10);
  p.textStyle(p.BOLD);
  p.text("HACK CLUB • 2026", margin, 568);

  p.textAlign(p.RIGHT, p.BOTTOM);
  p.textStyle(p.NORMAL);
  p.text("PROFILE // YOURFIYAN", w - margin, 568);
}

function drawHackClubFlag(p, x, y, width, height) {
  p.push();
  p.translate(x, y);
  p.fill(0);
  p.noStroke();
  p.beginShape();
  p.vertex(0, 0);
  p.vertex(width, 0);
  p.vertex(width - 12, height / 2);
  p.vertex(width, height);
  p.vertex(0, height);
  p.endShape(p.CLOSE);

  p.fill(255);
  p.textFont("monospace");
  p.textStyle(p.BOLD);
  p.textAlign(p.CENTER, p.CENTER);
  p.textSize(10.5);
  p.text("HACK", (width - 10) / 2, height / 2 - 6);
  p.text("CLUB", (width - 10) / 2, height / 2 + 6);
  p.pop();
}
