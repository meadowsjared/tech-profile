import { Vector } from "./vector";
import {
  findIntersectionFromPointToRect,
  getAnimationCurrentPosition,
} from "./geometryCalculations";

describe("magnitude works as expected", () => {
  it("returns the magnitude of a vector", () => {
    const vector = new Vector({ x: 3, y: 4 });
    expect(vector.magnitude()).toEqual(5);
  });
  it("correctly handles negative values", () => {
    const vector = new Vector({ x: -3, y: -4 });
    expect(vector.magnitude()).toEqual(5);
  });
  it("correctly handles a zero vector", () => {
    const vector = new Vector();
    expect(vector.magnitude()).toEqual(0);
  });
});

describe("findIntersectionFromPointToRect", () => {
  it("from 0,0 using vector { x: -369, y: 104.5 } hits the rectangular boundary", () => {
    const translateBgFrom = { current: new Vector() };
    const vector = new Vector({ x: -369, y: 104.5 });
    const rect: DOMRect = {
      x: 0,
      y: 0,
      width: 800,
      height: 611,
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      toJSON: () => "",
    };
    const translateBgTo: Vector = new Vector();
    const tangentialVector = { current: new Vector() };
    const tangentialSpeed = { current: 0 };
    const { intersectionPoint, effectiveVector } =
      findIntersectionFromPointToRect(
        translateBgFrom.current,
        vector,
        rect,
        translateBgTo,
        tangentialVector,
        tangentialSpeed,
      );
    intersectionPoint.x = Math.round(intersectionPoint.x * 100) / 100;
    intersectionPoint.y = Math.round(intersectionPoint.y * 100) / 100;
    expect(intersectionPoint).toEqual({
      x: -400,
      y: 113.28,
    });
    // expect(speedRatio).toEqual(1); // the speed ratio is 1 because the vector has not hit the boundary yet
    expect(effectiveVector).toEqual(vector); // the effective vector should not be restricted, because it has not hit the boundary yet
  });
  it("from 0,0 using vector { x: -400, y: 0 } hits the rectangular boundary", () => {
    const translateBgFrom = { current: new Vector() };
    const vector = new Vector({ x: -400, y: 0 });
    const rect: DOMRect = {
      x: 0,
      y: 0,
      width: 800,
      height: 611,
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      toJSON: () => "",
    };
    const translateBgTo: Vector = new Vector();
    const tangentialVector = { current: new Vector() };
    const tangentialSpeed = { current: 0 };
    const { intersectionPoint, effectiveVector } =
      findIntersectionFromPointToRect(
        translateBgFrom.current,
        vector,
        rect,
        translateBgTo,
        tangentialVector,
        tangentialSpeed,
      );
    intersectionPoint.x = Math.round(intersectionPoint.x * 100) / 100;
    intersectionPoint.y = Math.round(intersectionPoint.y * 100) / 100;
    expect(intersectionPoint).toEqual({
      x: -400,
      y: 0,
    });
    // expect(speedRatio).toEqual(1); // the speed ratio is 1 because the vector has not hit the boundary yet
    expect(effectiveVector).toEqual(vector); // the effective vector should not be restricted, because it has not hit the boundary yet
  });
});

describe("getAnimationCurrentPosition", () => {
  it("returns the current position of the animation", () => {
    const translateObjectFrom = new Vector();
    const translateObjectTo: Vector = new Vector({ x: 100, y: 100 });
    const totalObjectMoveTime = { current: 1 };
    const animationStartTime = { current: 0 };
    // take translateObjectTo and divide each component by 2
    const expectedResult = translateObjectTo.divide(2);

    const now = 500;
    expect(
      getAnimationCurrentPosition(
        translateObjectFrom,
        translateObjectTo,
        totalObjectMoveTime,
        animationStartTime,
        now,
        true,
      ),
    ).toEqual(expectedResult);
  });
});
