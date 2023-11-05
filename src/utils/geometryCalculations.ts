import {
  BG_SPEED,
  BG_SPEED_RESET_SPEED,
  STAR_SPEED_RESET_SPEED,
} from "../store/constants";
import { Vector } from "./vector";

export interface DurationOrEmpty {
  transitionDuration?: string;
}

/**
 * finds the intersection from a point to a rectangle using a vector
 * @param startingPoint the point to start from
 * @param helmPosition the direction to go in until you hit the edge
 * @param rect the rectangle to check for intersection
 */
export function findIntersectionFromPointToRect(
  startingPoint: Vector,
  helmPosition: Vector,
  rect: DOMRect,
  translateBgTo: Vector,
  tangentialVector: React.MutableRefObject<Vector>,
  tangentialSpeed: React.MutableRefObject<number>,
): {
  intersectionPoint: Vector;
  speed: number;
  effectiveVector: Vector;
  translateBgTo: Vector;
  tangentialVector: Vector;
  tangentialSpeed: number;
} {
  // get the bounds of the viewport
  const { xMin, xMax, yMin, yMax } = getBounds(rect);

  // extend the vector from the starting point to the edge of the viewport
  const { scalar, effectiveVector } = getXAndYScalars(
    startingPoint,
    helmPosition,
    xMin,
    xMax,
    yMin,
    yMax,
  );

  const { intersectionPoint, tangentialVector: tangentialVectorResult } =
    getIntersectionPoint(
      xMin,
      xMax,
      yMin,
      yMax,
      startingPoint,
      effectiveVector,
      scalar,
    );
  tangentialVector.current = tangentialVectorResult;
  const tangentialSpeedRatio = 0;
  const speed = BG_SPEED * effectiveVector.magnitude();
  tangentialSpeed.current = tangentialSpeedRatio * speed;

  return {
    intersectionPoint,
    speed,
    effectiveVector,
    translateBgTo,
    tangentialVector: tangentialVector.current,
    tangentialSpeed: tangentialSpeed.current,
  };
}

/**
 * gets the scalar for the x and y axis for what scalar would hit the edge of the viewport
 * @param startingPoint - the starting point
 * @param helmPosition - the vector to extend from the starting point
 * @param xMin - the minimum x value of the viewport
 * @param xMax - the maximum x value of the viewport
 * @param yMin - the minimum y value of the viewport
 * @param yMax - the maximum y value of the viewport
 */
function getXAndYScalars(
  startingPoint: Vector,
  helmPosition: Vector,
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
) {
  const xIntTest =
    helmPosition.x === 0
      ? null
      : Math.max(
          (xMin - startingPoint.x) / helmPosition.x,
          (xMax - startingPoint.x) / helmPosition.x,
        );
  const yIntTest =
    helmPosition.y === 0
      ? null
      : Math.max(
          (yMin - startingPoint.y) / helmPosition.y,
          (yMax - startingPoint.y) / helmPosition.y,
        );
  if (xIntTest === null && yIntTest === null) {
    debugger;
  }
  const xInt =
    helmPosition.x === 0
      ? null
      : Math.max(
          (xMin - startingPoint.x) / helmPosition.x,
          (xMax - startingPoint.x) / helmPosition.x,
        );
  const yInt =
    helmPosition.y === 0
      ? null
      : Math.max(
          (yMin - startingPoint.y) / helmPosition.y,
          (yMax - startingPoint.y) / helmPosition.y,
        );
  // note: we take the max of the two values because we know one of them will be negative, and the other will be positive
  // get the smaller of the two values, since that's the one that will hit the edge first
  // but if one is null, then we know it's not going to hit that edge, so we can ignore it
  // note2: both should never be zero, unless we're trying to go further into a corner that we're already in
  let scalar = Math.min(
    ...[xInt, yInt].filter(
      (value: number | null): value is number => value !== null,
    ),
  );
  const effectiveVector = helmPosition.clone();
  if (scalar === 0) {
    // if the scalar is zero, then we're already at the edge, so we need to use the max to get the other axis scalar
    if (xInt === 0) {
      effectiveVector.x = 0;
    }
    if (yInt === 0) {
      effectiveVector.y = 0;
    }
    scalar = Math.max(
      ...[xInt, yInt].filter((x: number | null): x is number => x !== null),
    );
  }
  return { effectiveVector, scalar };
}

function getIntersectionPoint(
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
  startingPoint: Vector,
  effectiveVector: Vector,
  scalar: number,
): { intersectionPoint: Vector; tangentialVector: Vector } {
  const intersectionPoint = new Vector({
    x: Math.max(
      xMin,
      Math.min(xMax, startingPoint.x + effectiveVector.x * scalar),
    ),
    y: Math.max(
      yMin,
      Math.min(yMax, startingPoint.y + effectiveVector.y * scalar),
    ),
  });
  // fix any out of bounds values due to floating point errors
  intersectionPoint.x = Math.min(xMax, Math.max(xMin, intersectionPoint.x));
  intersectionPoint.y = Math.min(yMax, Math.max(yMin, intersectionPoint.y));
  const tangentialVector = new Vector();
  // find out which wall it will hit first
  if (intersectionPoint.x !== xMin && intersectionPoint.x !== xMax) {
    tangentialVector.x = effectiveVector.x;
  }
  if (intersectionPoint.y !== yMin && intersectionPoint.y !== yMax) {
    tangentialVector.y = effectiveVector.y;
  }
  return { intersectionPoint, tangentialVector };
}

export function getBounds(rect: DOMRect) {
  return {
    xMin: -rect.width / 2,
    xMax: rect.width / 2,
    yMin: -rect.height / 2,
    yMax: rect.height / 2,
  };
}

/**
 * calculates the distance needed
 *
 * then divides by the rate to get the animation duration
 *
 * measured in seconds
 */
export function calculateAnimationDurationFromDistance(
  // diffVector: Vector,
  prevPos: Vector,
  newPos: Vector,
  speed: number,
) {
  const diffVector = prevPos.subtract(newPos);
  const localDistance = diffVector.magnitude();
  return speed === 0 ? 0 : localDistance / speed;
}

/**
 * calculates the current position of the object based on:
 * @param translateObjectFrom the starting position
 * @param translateObjectTo the end position
 * @param totalObjectMoveTime the total time (in seconds) it will take to get to the new location from the previous location
 * @param animationStartTime the time the animation started
 * @param now the current time (in milliseconds)
 */
export function getAnimationCurrentPosition(
  translateObjectFrom: Vector,
  translateObjectTo: Vector,
  totalObjectMoveTime: React.MutableRefObject<number>,
  animationStartTime: React.MutableRefObject<number>,
  now: number,
  movingStars: boolean,
): Vector {
  if (
    totalObjectMoveTime.current === 0 ||
    now - animationStartTime.current >= totalObjectMoveTime.current * 1000
  ) {
    // set the previous values to the previous "to" values, since this is the start of the animation
    // mark the start time
    return translateObjectTo;
    // set the total time to the time it will take to get to the new location from the previous location
  } else {
    // calculate the elapsed time
    const elapsedTime = (now - animationStartTime.current) / 1000;
    // calculate the percentage elapsed
    const percentageElapsed =
      totalObjectMoveTime.current === 0
        ? 0
        : elapsedTime / totalObjectMoveTime.current;
    // get the current position based off of how far through the animation we are
    // translateObjectFrom + (translateObjectTo - translateObjectFrom) * percentageElapsed;
    return translateObjectFrom.add(
      translateObjectTo
        .subtract(translateObjectFrom)
        .multiply(percentageElapsed),
    );
    // set the total time to the time it will take to get to the new location from the previous location
  }
}

/**
 * This function:
 * 1. gets the current position of the background
 * 2. from the starting position, extend the helmPosition vector until it hits the edge of the background
 * 3. calculate the distance it will take to reach the edge of the background from the current position of the background
 * 4. calculate the duration of the animation based on the distance and the speed
 * @param helmPosition
 * @param translateBgFrom
 * @param translateBgTo
 * @param totalBgTime
 * @param startBgTime
 * @param movingBgRef
 * @param tangentialVector
 * @param tangentialSpeed
 * @param vector
 */
export function moveBgTo(
  helmPosition: Vector,
  translateBgFrom: Vector,
  translateBgTo: Vector,
  totalBgTime: React.MutableRefObject<number>,
  startBgTime: React.MutableRefObject<number>,
  movingBgRef: React.MutableRefObject<HTMLDivElement | null>,
  tangentialVector: React.MutableRefObject<Vector>,
  tangentialSpeed: React.MutableRefObject<number>,
  vector: React.MutableRefObject<Vector>,
): {
  destination: Vector;
  duration: DurationOrEmpty;
  currentBgPosition: Vector;
} {
  const now = Date.now();
  const resetting = Object.values(helmPosition).every(
    (value: number) => value === 0,
  );

  // 1. get the current position of the background
  const currentBgPosition = getAnimationCurrentPosition(
    translateBgFrom,
    translateBgTo,
    totalBgTime,
    startBgTime,
    now,
    false,
  );

  // 2. from the starting position, extend the helmPosition vector until it hits the edge of the background
  // get a vector from where it is, to where it needs to go
  const movementVector: Vector = helmPosition.clone();

  // get the bounds of the viewport
  const rect = movingBgRef.current?.getBoundingClientRect();

  if (rect) {
    // 3. calculate the distance it will take to reach the edge of the background from the current position of the background
    const {
      intersectionPoint: backgroundDestination,
      effectiveVector,
      speed,
    } = resetting
      ? {
          intersectionPoint: helmPosition,
          effectiveVector: movementVector,
          speed: BG_SPEED_RESET_SPEED * currentBgPosition.magnitude(),
        }
      : findIntersectionFromPointToRect(
          currentBgPosition,
          helmPosition,
          rect,
          translateBgTo,
          tangentialVector,
          tangentialSpeed,
        );

    if (resetting) {
      // this ensures that we don't have follow-up movement after resetting the background
      tangentialVector.current = new Vector();
    }

    startBgTime.current = now;

    vector.current = effectiveVector;

    // 4. calculate the duration of the animation based on the distance and the speed
    const durationNumber =
      /*Math.max(+*/
      calculateAnimationDurationFromDistance(
        currentBgPosition,
        backgroundDestination,
        speed,
        // )
      );

    const duration = `${Math.round(durationNumber * 100) / 100}s`;
    const durationOrEmpty =
      duration === "0s" ? {} : { transitionDuration: duration };
    totalBgTime.current = durationNumber;

    return {
      destination: backgroundDestination,
      duration: durationOrEmpty,
      currentBgPosition,
    };
  }
  return { destination: new Vector(), duration: {}, currentBgPosition };
}

export function moveStarsTo(
  newPos: Vector,
  speed: number,
  now: number,
  translateHelmFrom: React.MutableRefObject<Vector>,
  durationPayload: React.MutableRefObject<
    { destination: Vector; duration: DurationOrEmpty } | undefined
  >,
  translateHelmTo: Vector,
  totalHelmTime: React.MutableRefObject<number>,
  startHelmTime: React.MutableRefObject<number>,
  translateBgFrom: React.MutableRefObject<Vector>,
  translateBgTo: React.MutableRefObject<Vector>,
  totalBgTime: React.MutableRefObject<number>,
  startBgTime: React.MutableRefObject<number>,
  movingBgRef: React.MutableRefObject<HTMLDivElement | null>,
  setTransitionHelmDuration: React.Dispatch<React.SetStateAction<string>>,
  setTranslateHelmTo: React.Dispatch<React.SetStateAction<Vector>>,
  setTransitionBgDuration: React.Dispatch<
    React.SetStateAction<DurationOrEmpty>
  >,
  tangentialVector: React.MutableRefObject<Vector>,
  tangentialSpeed: React.MutableRefObject<number>,
  vector: React.MutableRefObject<Vector>,
) {
  const position = getAnimationCurrentPosition(
    translateHelmFrom.current,
    translateHelmTo,
    totalHelmTime,
    startHelmTime,
    now,
    true,
  );
  translateHelmFrom.current = position;
  startHelmTime.current = now;
  totalHelmTime.current = calculateAnimationDurationFromDistance(
    // differenceVector,
    newPos,
    translateHelmFrom.current,
    speed,
  );
  // perform the animation
  setTransitionHelmDuration(`${totalHelmTime.current}s`);
  setTranslateHelmTo(newPos);

  if (!newPos.equals({ x: 0, y: 0 })) {
    const { destination, duration, currentBgPosition } = moveBgTo(
      newPos,
      translateBgFrom.current,
      translateBgTo.current,
      totalBgTime,
      startBgTime,
      movingBgRef,
      tangentialVector,
      tangentialSpeed,
      vector,
    );
    translateBgFrom.current = currentBgPosition;

    if (durationPayload.current === undefined) {
      // check if there is not a pending change in duration and destination
      durationPayload.current = { duration, destination };
      resetAnimation(
        translateBgFrom,
        translateBgTo,
        totalBgTime,
        startBgTime,
        setTransitionBgDuration,
      );
    }
  }
}

function resetAnimation(
  translateBgFrom: React.MutableRefObject<Vector>,
  translateBgTo: React.MutableRefObject<Vector>,
  totalBgTime: React.MutableRefObject<number>,
  startBgTime: React.MutableRefObject<number>,
  setTransitionBgDuration: React.Dispatch<
    React.SetStateAction<DurationOrEmpty>
  >,
) {
  // requestAnimationFrame(() => {
  const position = getAnimationCurrentPosition(
    translateBgFrom.current,
    translateBgTo.current,
    totalBgTime,
    startBgTime,
    Date.now(),
    false,
  );
  translateBgTo.current = position;
  setTransitionBgDuration({ transitionDuration: "0ms" });
}

/**
 * Resets the translation coordinates for the helm control.
 * used by onMouseOut and onTouchEnd
 */
export function resetDirection(
  translateBgFrom: React.MutableRefObject<Vector>,
  translateBgTo: React.MutableRefObject<Vector>,
  totalBgTime: React.MutableRefObject<number>,
  startBgTime: React.MutableRefObject<number>,
  movingBgRef: React.MutableRefObject<HTMLDivElement | null>,
  setTransitionBgDuration: React.Dispatch<
    React.SetStateAction<DurationOrEmpty>
  >,
  tangentialVector: React.MutableRefObject<Vector>,
  tangentialSpeed: React.MutableRefObject<number>,
  vector: React.MutableRefObject<Vector>,
  durationPayload: React.MutableRefObject<
    { destination: Vector; duration: DurationOrEmpty } | undefined
  >,
  translateHelmTo: Vector,
  setTransitionHelmDuration: React.Dispatch<React.SetStateAction<string>>,
  setTranslateHelmTo: React.Dispatch<React.SetStateAction<Vector>>,
) {
  moveStarsTo(
    new Vector(),
    STAR_SPEED_RESET_SPEED,
    Date.now(),
    translateBgFrom,
    durationPayload,
    translateHelmTo,
    totalBgTime,
    startBgTime,
    translateBgFrom,
    translateBgTo,
    totalBgTime,
    startBgTime,
    movingBgRef,
    setTransitionHelmDuration,
    setTranslateHelmTo,
    setTransitionBgDuration,
    tangentialVector,
    tangentialSpeed,
    vector,
  );
  const { destination, duration } = moveBgTo(
    new Vector(),
    translateBgFrom.current,
    translateBgTo.current,
    totalBgTime,
    startBgTime,
    movingBgRef,
    tangentialVector,
    tangentialSpeed,
    vector,
  );
  /* if this runs too fast, it will happen before the useEffect for transitionBgDuration */
  requestAnimationFrame(() => {
    setTransitionBgDuration(duration);
    translateBgTo.current = destination;
  });
}
