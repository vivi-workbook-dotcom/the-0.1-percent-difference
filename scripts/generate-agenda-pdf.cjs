// Generates agenda PDF for Product Velocity Summit attendees
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "agenda-product-velocity-summit.pdf");

const CORAL = "#f6584b";
const OFF_WHITE = "#f4f3ef";
const BLACK = "#000000";
const DARK = "#0d0d0d";
const GREY = "#888888";
const LIGHT_GREY = "#444444";

const agenda = [
  { time: "4:30 PM", title: "Doors Open & Check-In", format: "", desc: "", duration: "30 min", speakers: [] },
  { time: "5:00 PM", title: "Opening Welcome", format: "", desc: "", duration: "15 min", speakers: [{ name: "Jay Bhanushali", role: "MC · Product Velocity Summit" }] },
  { time: "5:15 PM", title: "Opening Remarks", format: "", desc: "", duration: "15 min", speakers: [{ name: "VethaVarshini", role: "Founder · The Product Street" }] },
  { time: "5:30 PM", title: '"I Asked AI. Then I Asked Humans. 20 Decisions. 20 Outcomes. ...That Changed My Mind."', format: "Keynote", desc: "", duration: "30 min", speakers: [{ name: "Mahuya Ghosh", role: "Director & AI Strategist · Dell Technologies" }] },
  { time: "6:00 PM", title: '"Think in Systems, Build in Flows"', format: "Fireside Chat", desc: "", duration: "30 min", speakers: [{ name: "Adith Narein", role: "Design Engineer · Sarvam.ai" }] },
  { time: "6:30 PM", title: "⚡ Lightning Round", format: "", desc: "Surprise Session", duration: "30 min", speakers: [] },
  { time: "7:00 PM", title: '"The AI Equation: Adoption, Economics & Judgment"', format: "Panel", desc: "", duration: "30 min", speakers: [{ name: "Sanjay Mandava", role: "CEO · Landeed (YC S22)" }, { name: "Saurav Basu", role: "Head of AI Labs · ADP India" }, { name: "Deepak Menon", role: "VP, Product Experiences · Microsoft" }] },
  { time: "7:30 PM", title: "Curated Networking", format: "", desc: "Themed stations + refreshments. Come with a business card, leave with a collaborator.", duration: "60 min", speakers: [] },
];

const doc = new PDFDocument({
  size: "A4",
  margin: 0,
  info: {
    Title: "Agenda — The Product Velocity Summit",
    Author: "The Product Street",
    Subject: "July 4, 2026 · T HUB, Hyderabad",
  },
});

const stream = fs.createWriteStream(OUT);
doc.pipe(stream);

const W = doc.page.width;   // 595
const H = doc.page.height;  // 842
const PAD = 48;
const COL = W - PAD * 2;

// ── Background ──────────────────────────────────────────────────────────────
doc.rect(0, 0, W, H).fill(DARK);

// ── Top coral accent bar ─────────────────────────────────────────────────────
doc.rect(0, 0, W, 4).fill(CORAL);

// ── Header area ──────────────────────────────────────────────────────────────
let y = 36;

// Eyebrow
doc
  .font("Helvetica-Bold")
  .fontSize(8)
  .fillColor(CORAL)
  .text("THE PRODUCT STREET  ·  PRESENTS", PAD, y, { characterSpacing: 2.5 });

y += 22;

// Event name
doc
  .font("Helvetica-Bold")
  .fontSize(26)
  .fillColor(OFF_WHITE)
  .text("The Product Velocity Summit", PAD, y);

y += 34;

// Meta line
doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor(GREY)
  .text("July 4, 2026  ·  Saturday  ·  4:30 PM – 8:30 PM  ·  T HUB, Hyderabad", PAD, y);

y += 18;

// Divider
doc.rect(PAD, y, COL, 0.5).fill(CORAL);
y += 20;

// ── Column headers ────────────────────────────────────────────────────────────
const TIME_W = 68;
const DUR_W = 54;
const MID_W = COL - TIME_W - DUR_W - 24;
const TIME_X = PAD;
const MID_X = PAD + TIME_W + 12;
const DUR_X = W - PAD - DUR_W;

doc
  .font("Helvetica-Bold")
  .fontSize(7.5)
  .fillColor(GREY)
  .text("TIME", TIME_X, y, { characterSpacing: 1.8 })
  .text("SESSION", MID_X, y, { characterSpacing: 1.8 })
  .text("DURATION", DUR_X, y, { characterSpacing: 1.2, width: DUR_W, align: "right" });

y += 14;
doc.rect(PAD, y, COL, 0.5).fillColor("#222222").fill();
y += 14;

// ── Agenda rows ───────────────────────────────────────────────────────────────
agenda.forEach((item, idx) => {
  // Estimate row height
  const titleLines = Math.ceil(item.title.length / 52) + (item.desc ? 1 : 0);
  const speakerLines = item.speakers.length;
  const rowH = Math.max(32, 18 + titleLines * 14 + speakerLines * 14 + (item.format ? 4 : 0));

  // Alternate subtle row bg
  if (idx % 2 === 0) {
    doc.rect(PAD - 8, y - 6, COL + 16, rowH + 8).fillColor("rgba(255,255,255,0.02)").fill();
  }

  const rowY = y;

  // Time
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(CORAL)
    .text(item.time, TIME_X, rowY, { width: TIME_W });

  // Title
  let titleY = rowY;
  if (item.format) {
    // Format badge text inline
    doc
      .font("Helvetica-Bold")
      .fontSize(7)
      .fillColor(CORAL)
      .text(`[${item.format.toUpperCase()}]`, MID_X, titleY, { width: MID_W });
    titleY += 11;
  }

  doc
    .font("Helvetica-Bold")
    .fontSize(10.5)
    .fillColor(OFF_WHITE)
    .text(item.title, MID_X, titleY, { width: MID_W });

  let afterTitle = titleY + doc.heightOfString(item.title, { width: MID_W, fontSize: 10.5 }) + 2;

  if (item.desc) {
    doc
      .font("Helvetica")
      .fontSize(9)
      .fillColor(GREY)
      .text(item.desc, MID_X, afterTitle, { width: MID_W });
    afterTitle += 14;
  }

  if (item.speakers.length > 0) {
    item.speakers.forEach((s) => {
      doc
        .font("Helvetica-Bold")
        .fontSize(8.5)
        .fillColor(OFF_WHITE)
        .text(s.name, MID_X, afterTitle, { continued: true, width: MID_W })
        .font("Helvetica")
        .fontSize(8.5)
        .fillColor(LIGHT_GREY)
        .text(`  ·  ${s.role}`, { width: MID_W });
      afterTitle += 13;
    });
  }

  // Duration
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(GREY)
    .text(item.duration, DUR_X, rowY, { width: DUR_W, align: "right" });

  y += rowH + 4;

  // Row divider
  doc.rect(PAD, y - 2, COL, 0.5).fillColor("#1e1e1e").fill();
  y += 10;
});

// ── Footer ────────────────────────────────────────────────────────────────────
y = H - 52;
doc.rect(PAD, y, COL, 0.5).fillColor("#222").fill();
y += 14;

doc
  .font("Helvetica")
  .fontSize(8)
  .fillColor(GREY)
  .text("theproductstreet.in  ·  @TheProductStreet", PAD, y, { continued: true, width: COL })
  .fillColor(CORAL)
  .text("  ·  rzp.io/rzp/theproductstreet", { continued: false });

doc
  .font("Helvetica")
  .fontSize(7.5)
  .fillColor("#555")
  .text("Agenda subject to minor changes.", PAD, y + 14, { width: COL, align: "right" });

// Bottom coral bar
doc.rect(0, H - 4, W, 4).fill(CORAL);

doc.end();

stream.on("finish", () => {
  console.log(`✅  PDF saved → ${OUT}`);
});
stream.on("error", (err) => {
  console.error("❌  Error writing PDF:", err);
  process.exit(1);
});
