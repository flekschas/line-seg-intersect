/**
 * Tests whether two line segments intersect but does not determine where.
 *
 * By http://paulbourke.net/geometry/pointlineplane/#i2l.
 *
 * @param   {number}  x1  X coordinate of the first point.
 * @param   {number}  x2  X coordinate of the second point.
 * @param   {number}  x3  X coordinate of the third point.
 * @param   {number}  x4  X coordinate of the fourth point.
 * @param   {number}  y1  Y coordinate of the first point.
 * @param   {number}  y2  Y coordinate of the second point.
 * @param   {number}  y3  Y coordinate of the third point.
 * @param   {number}  y4  Y coordinate of the fourth point.
 * @return  {boolean}  `true` if the two line segments intersect.
 */
const lineSegIntersect = (x1, x2, x3, x4, y1, y2, y3, y4) => {
  const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
  const numera = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
  const numerb = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);

  const ua = numera / denom;
  const ub = numerb / denom;

  return !(ua < 0 || ua > 1 || ub < 0 || ub > 1);
};

export default lineSegIntersect;
