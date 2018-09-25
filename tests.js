const test = require("tape");
const lineSegIntersect = require("./dist/line-seg-intersect.js");

const segs = [
  [[0, 1, 1, 2, 0, 1, 0, 1], false, "parallel should *not* intersect"],
  [[0, 1, 0, 1, 0, 1, 1, 0], true, "x-intersect should intersect"],
  [[0, 1, 0, 1, 0, 1, 0, 1], true, "identical should intersect"],
  [[0, 2, 1, 3, 0, 2, 1, 3], true, "partial should intersect"],
  [[0, 1, 1, 2, 0, 1, 1, 2], true, "same direction extension should intersect"],
  [[0, 2, 1, 1, 0, 0, 1, 0], true, "T-intersect should intersect"],
  [[0, 2, 1, 1, 0, 0, 1, 0], true, "inverse T-intersect should intersect"]
];

test("publishes and subscribes to event", t => {
  t.plan(segs.length);
  segs.forEach(seg => t.ok(lineSegIntersect(...seg[0]) === seg[1], seg[2]));
});
