interface Vector {
  x: number;
  y: number;
}

export function magnitude(vector: Vector) {
  return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
}
