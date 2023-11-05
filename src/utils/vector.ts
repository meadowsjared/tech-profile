export interface VectorPrimitive {
  x: number;
  y: number;
}

/**
 * a vector class
 * @param x the x value of the vector
 * @param y the y value of the vector
 * @returns a new vector
 * @throws an error if the arguments are invalid
 */
export class Vector {
  public x: number;
  public y: number;
  constructor(x: number, y: number);
  constructor(vector: VectorPrimitive);
  constructor();
  constructor(xOrVector?: number | VectorPrimitive, y?: number) {
    // if no arguments are passed, then we can just use the default values
    if (xOrVector === undefined && y === undefined) {
      this.x = 0;
      this.y = 0;
      return;
    }
    // if the arguments are numbers, then we can use them directly
    if (typeof xOrVector === "number" && typeof y === "number") {
      this.x = xOrVector;
      this.y = y;
      return;
    }
    // if the arguments are an object, then it is a VectorPrimitive, so we can use the x and y values directly
    if (typeof xOrVector === "object" && y === undefined) {
      this.x = xOrVector.x;
      this.y = xOrVector.y;
      return;
    }
    throw new Error("invalid arguments");
  }

  /**
   * returns a new vector with the same values as this vector
   */
  clone(): Vector {
    return new Vector({ x: this.x, y: this.y });
  }

  /**
   * returns a true if the two vectors are equal
   * @param vector the vector to compare to
   */
  equals(vector: VectorPrimitive): boolean;
  equals(vector: Vector): boolean;
  equals(vector: Vector | VectorPrimitive): boolean {
    return this.x === vector.x && this.y === vector.y;
  }

  /**
   * returns the magnitude of the vector
   */
  magnitude(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
  /**
   * returns the sum of the two vectors
   * @param vector the vector to add to this vector
   */
  add(vector: VectorPrimitive): Vector;
  add(vector: Vector): Vector;
  add(vector: Vector | VectorPrimitive): Vector {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  /**
   * returns the difference of the two vectors
   * @param vector the vector to subtract from this vector
   */
  subtract(vector: VectorPrimitive): Vector;
  subtract(vector: Vector): Vector;
  subtract(vector: Vector | VectorPrimitive): Vector {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  /**
   * returns the division of the vector by a scalar
   * @param scalar the scalar to divide the vector by
   * @returns a new vector
   */
  divide(scalar: number): Vector {
    return new Vector(this.x / scalar, this.y / scalar);
  }

  /**
   * returns the multiplication of the vector by a scalar
   * @param scalar the scalar to multiply the vector by
   * @returns a new vector
   */
  multiply(scalar: number): Vector {
    return new Vector(this.x * scalar, this.y * scalar);
  }
}
