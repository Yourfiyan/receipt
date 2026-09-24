// Generative Art Portrait Sketch featuring Yourfiyan and Hack Club!
// p5.js reference: https://p5js.org/reference/
const portraitDataUri =
  "data:image/png;base64,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";

export const receipt = {
  height: 600, // Compact height for generative print
  seed: 42,
};

// Pre-create the HTMLImageElement so it's decoded and ready synchronously
const portraitImg = new Image();
portraitImg.src = portraitDataUri;

export function drawReceipt(p) {
  const { width: w } = p;
  const margin = 20;

  // 1. Crisp white paper background
  p.background(255);

  // 2. Header: Hack Club Flag + YOURFIYAN
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

  // Clean separator
  p.stroke(0);
  p.strokeWeight(2);
  p.line(margin, 74, w - margin, 74);

  // 3. Generative Background Field
  // Seeded celestial / constellation lines & micro particles
  p.stroke(0);
  p.strokeWeight(1);
  const numStars = 50;
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const sx = p.random(margin, w - margin);
    const sy = p.random(84, 500);
    // Don't clutter the main face area
    if (sx > 110 && sx < 290 && sy > 120 && sy < 450) continue;
    stars.push({ x: sx, y: sy });
    p.point(sx, sy);
  }

  // Draw gentle geometric constellation links
  p.strokeWeight(0.5);
  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      const dist = p.dist(stars[i].x, stars[i].y, stars[j].x, stars[j].y);
      if (dist < 42 && p.random() > 0.65) {
        p.line(stars[i].x, stars[i].y, stars[j].x, stars[j].y);
      }
    }
  }

  // 4. Portrait: Your exact side profile with glasses, bun, and posture from the photo!
  const portraitW = 240;
  const portraitH = Math.round(portraitW * (343 / 260)); // preserve aspect ratio
  const portraitX = Math.round((w - portraitW) / 2) + 12;
  const portraitY = 96;

  if (portraitImg.complete && portraitImg.naturalWidth > 0) {
    p.drawingContext.drawImage(portraitImg, portraitX, portraitY, portraitW, portraitH);
  }

  // 5. Generative Framing Accents
  // Technical corner tick marks around the portrait
  drawCornerTicks(p, margin, 84, w - margin * 2, 430);

  // 6. Bottom Technical Scale & Footer
  p.stroke(0);
  p.strokeWeight(2);
  p.line(margin, 525, w - margin, 525);

  p.strokeWeight(1);
  for (let x = margin; x <= w - margin; x += 6) {
    const isMajor = (x - margin) % 30 === 0;
    const tickH = isMajor ? 6 : 3;
    p.line(x, 525, x, 525 + tickH);
  }

  // Footer metadata
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

// Draw official Hack Club style flag badge
function drawHackClubFlag(p, x, y, width, height) {
  p.push();
  p.translate(x, y);

  // Black flag body with notched right end
  p.fill(0);
  p.noStroke();
  p.beginShape();
  p.vertex(0, 0);
  p.vertex(width, 0);
  p.vertex(width - 12, height / 2);
  p.vertex(width, height);
  p.vertex(0, height);
  p.endShape(p.CLOSE);

  // White text inside
  p.fill(255);
  p.textFont("monospace");
  p.textStyle(p.BOLD);
  p.textAlign(p.CENTER, p.CENTER);
  p.textSize(10.5);
  p.text("HACK", (width - 10) / 2, height / 2 - 6);
  p.text("CLUB", (width - 10) / 2, height / 2 + 6);

  p.pop();
}

// Generative framing corner ticks
function drawCornerTicks(p, x, y, width, height) {
  p.push();
  p.stroke(0);
  p.strokeWeight(1.5);
  const size = 12;

  // Top-left
  p.line(x, y, x + size, y);
  p.line(x, y, x, y + size);

  // Top-right
  p.line(x + width, y, x + width - size, y);
  p.line(x + width, y, x + width, y + size);

  // Bottom-left
  p.line(x, y + height, x + size, y + height);
  p.line(x, y + height, x, y + height - size);

  // Bottom-right
  p.line(x + width, y + height, x + width - size, y + height);
  p.line(x + width, y + height, x + width, y + height - size);

  p.pop();
}
