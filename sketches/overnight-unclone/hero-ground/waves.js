/* Same ribbon as src/components/HeroWaves.astro. Palette + freeze only. */
(function () {
  var canvas = document.querySelector(".hm-waves");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var palettes = {
    paper: {
      gradientStart: "#0a3568",
      gradientEnd: "#4e86ad",
      opacity: 0.8,
      strokeWidth: 1.2,
      edgeFade: 0.16,
    },
    steel: {
      gradientStart: "#00428C",
      gradientEnd: "#3d86b3",
      opacity: 0.76,
      strokeWidth: 1.16,
      edgeFade: 0.16,
    },
    navy: {
      gradientStart: "#7eb8d9",
      gradientEnd: "#e4f1fa",
      opacity: 0.9,
      strokeWidth: 1.22,
      edgeFade: 0.15,
    },
    soft: {
      gradientStart: "#9acae4",
      gradientEnd: "#eaf4fb",
      opacity: 0.88,
      strokeWidth: 1.22,
      edgeFade: 0.15,
    },
  };
  var named = palettes[canvas.getAttribute("data-palette") || "navy"] || palettes.navy;
  var freezeAttr = canvas.getAttribute("data-time");
  var freeze = freezeAttr == null ? NaN : parseFloat(freezeAttr);
  var buffers = [];
  var normalsBuf = [];
  var palette = [];
  var palKey = "";
  var dpr = 1;
  var REST = 1.15;

  var settings = {
    count: 16,
    resolution: 80,
    spacing: 9.5,
    amplitude: 120,
    frequency: 0.55,
    phase: 0.19,
    twist: 0.36,
    bulge: 0.78,
    morph: 0.22,
    speed: 0.26,
    anim: "flow",
    strokeWidth: named.strokeWidth,
    opacity: named.opacity,
    gradientStart: named.gradientStart,
    gradientEnd: named.gradientEnd,
    edgeFade: named.edgeFade,
    rotate: -6,
    designW: 1600,
    designH: 480,
  };

  function hexRgb(hex) {
    var t = hex.replace("#", "");
    if (t.length === 3)
      t = t
        .split("")
        .map(function (c) {
          return c + c;
        })
        .join("");
    return [parseInt(t.slice(0, 2), 16), parseInt(t.slice(2, 4), 16), parseInt(t.slice(4, 6), 16)];
  }

  function offsets(line, u, time) {
    var n = settings.count;
    var phase = settings.phase * (line - (n - 1) / 2);
    var twist = settings.twist;
    var freq = settings.frequency * Math.PI * 2;
    var bulge = 1 + settings.bulge * Math.sin(u * Math.PI);
    var flow = 0;
    var morphT = 0;
    var spin = 0;
    if (settings.anim === "flow") flow = 0.55 * time;
    if (settings.anim === "spin") spin = 0.45 * time;
    var a = Math.sin(freq * u + phase + flow);
    var b = Math.sin(0.5 * freq * u - 2 * phase + 0.7 * flow + spin);
    var morph = 0;
    if (settings.morph > 0) {
      morph =
        Math.sin(3.7 * u + morphT + 0.2 * line) * Math.cos(2.1 * u - 0.5 * morphT + 0.13 * line);
    }
    return {
      yOffset: (a + twist * b + settings.morph * morph) * 0.5 * bulge,
      lineOffset: ((n <= 1 ? 0.5 : line / (n - 1)) - 0.5) * n * settings.spacing,
    };
  }

  function points(line, time) {
    var steps = Math.max(2, settings.resolution) - 1;
    var buf = buffers[line];
    if (!buf || buf.length !== steps + 1) {
      buf = Array.from({ length: steps + 1 }, function () {
        return { x: 0, y: 0 };
      });
      buffers[line] = buf;
    }
    var midY = settings.designH / 2;
    var rad = (settings.rotate * Math.PI) / 180;
    var cos = Math.cos(rad);
    var sin = Math.sin(rad);
    var midX = settings.designW / 2;
    for (var i = 0; i <= steps; i++) {
      var u = i / steps;
      var off = offsets(line, u, time);
      var x = u * settings.designW;
      var y = midY + off.lineOffset + off.yOffset * settings.amplitude;
      var p = buf[i];
      if (rad === 0) {
        p.x = x;
        p.y = y;
      } else {
        var dx = x - midX;
        var dy = y - midY;
        p.x = midX + dx * cos - dy * sin;
        p.y = midY + dx * sin + dy * cos;
      }
    }
    return buf;
  }

  function normals(pts, line) {
    var n = pts.length;
    var buf = normalsBuf[line];
    if (!buf || buf.length !== n) {
      buf = Array.from({ length: n }, function () {
        return { x: 0, y: 1 };
      });
      normalsBuf[line] = buf;
    }
    for (var i = 0; i < n; i++) {
      var a = pts[Math.max(0, i - 1)];
      var b = pts[Math.min(n - 1, i + 1)];
      var dx = b.x - a.x;
      var dy = b.y - a.y;
      var len = Math.hypot(dx, dy) || 1;
      buf[i].x = -dy / len;
      buf[i].y = dx / len;
    }
    return buf;
  }

  function halfWidth(u, line) {
    var s = Math.sin(Math.PI * u);
    var belly = s * s;
    var n = settings.count;
    var t = n <= 1 ? 0.5 : line / (n - 1);
    var ring = 0.76 + 0.24 * Math.sin(t * Math.PI);
    return (settings.strokeWidth * dpr * (0.2 + 0.8 * belly) * ring) / 2;
  }

  function colors() {
    var key = settings.gradientStart + settings.gradientEnd + settings.count + settings.opacity;
    if (key === palKey) return palette;
    palKey = key;
    palette = [];
    var a = hexRgb(settings.gradientStart);
    var b = hexRgb(settings.gradientEnd);
    for (var i = 0; i < settings.count; i++) {
      var t = settings.count <= 1 ? 0 : i / (settings.count - 1);
      var r = Math.round(a[0] + (b[0] - a[0]) * t);
      var g = Math.round(a[1] + (b[1] - a[1]) * t);
      var bl = Math.round(a[2] + (b[2] - a[2]) * t);
      palette.push({
        clear: "rgba(" + r + "," + g + "," + bl + ",0)",
        full: "rgba(" + r + "," + g + "," + bl + "," + settings.opacity + ")",
      });
    }
    return palette;
  }

  function draw(time) {
    ctx.clearRect(0, 0, settings.designW, settings.designH);
    var pal = colors();
    var fade = Math.min(0.5, Math.max(0, settings.edgeFade));
    for (var i = 0; i < settings.count; i++) {
      var pts = points(i, time);
      if (pts.length < 2) continue;
      var first = pts[0];
      var last = pts[pts.length - 1];
      var col = pal[i];
      if (!first || !col) continue;
      if (fade > 0 && last) {
        var grad = ctx.createLinearGradient(first.x, first.y, last.x, last.y);
        grad.addColorStop(0, col.clear);
        grad.addColorStop(fade, col.full);
        grad.addColorStop(1 - fade, col.full);
        grad.addColorStop(1, col.clear);
        ctx.fillStyle = grad;
      } else {
        ctx.fillStyle = col.full;
      }
      var nrm = normals(pts, i);
      var n = pts.length;
      ctx.beginPath();
      for (var j = 0; j < n; j++) {
        var u = j / (n - 1);
        var hw = halfWidth(u, i);
        if (j === 0) ctx.moveTo(pts[j].x + nrm[j].x * hw, pts[j].y + nrm[j].y * hw);
        else ctx.lineTo(pts[j].x + nrm[j].x * hw, pts[j].y + nrm[j].y * hw);
      }
      for (var k = n - 1; k >= 0; k--) {
        var u2 = k / (n - 1);
        var hw2 = halfWidth(u2, i);
        ctx.lineTo(pts[k].x - nrm[k].x * hw2, pts[k].y - nrm[k].y * hw2);
      }
      ctx.closePath();
      ctx.fill();
    }
  }

  function frame(time) {
    settings.designW = canvas.width;
    settings.designH = canvas.height;
    settings.amplitude = Math.max(70, canvas.height * 0.28);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    draw(time);
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    var box = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(box.width * dpr));
    canvas.height = Math.max(1, Math.round(box.height * dpr));
  }

  resize();
  var t0 = !isNaN(freeze) ? freeze : REST;
  frame(t0);
  window.addEventListener("resize", function () {
    resize();
    frame(t0);
  });
})();
