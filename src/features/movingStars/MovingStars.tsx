import style from "./MovingStars.module.scss";
import { useEffect, useRef, useState } from "react";
import { STAR_SPEED } from "@/store/constants";
import {
  DurationOrEmpty,
  moveBgTo,
  moveStarsTo,
  resetDirection,
} from "@/utils/geometryCalculations";
import { Vector } from "@/utils/vector";
import Image from "next/image";
import stars from "../../../public/assets/img/stars_large.webp";
import starsSmallBase64 from "../../../public/assets/img/stars_small_base64";

export default function MovingStars() {
  const translateHelmFrom = useRef(new Vector());
  const [translateHelmTo, setTranslateHelmTo] = useState(
    new Vector(),
    /*x: 0 /* 400 for right, -400 for left */
    /*y: 0 /* 218 for bottom, -180.5 for top */
  );

  const translateBgFrom = useRef(new Vector());
  const translateBgTo = useRef(new Vector());

  const [transitionHelmDuration, setTransitionHelmDuration] = useState("0ms"); // [1
  const [transitionBgDuration, setTransitionBgDuration] =
    useState<DurationOrEmpty>({});

  const movingHelmRef = useRef<HTMLDivElement>(null);
  const movingBgRef = useRef<HTMLDivElement>(null);
  // variable to keep track of the previous value of translateXStarsTo
  const totalHelmTime = useRef(0);
  const totalBgTime = useRef(0);

  const startHelmTime = useRef(0);
  const startBgTime = useRef(0);

  const vector = useRef(new Vector());
  const tangentialVector = useRef(new Vector());
  const tangentialSpeed = useRef<number>(0);

  const testingParentRef = useRef<HTMLDivElement>(null);

  const durationPayload = useRef<
    | {
        duration: DurationOrEmpty;
        destination: Vector;
      }
    | undefined
  >(undefined);

  function applyPartialBgMovementVector() {
    // check if we are going to the center
    totalBgTime.current = 0;
    translateBgFrom.current = translateBgTo.current.clone();
    if (Object.values(translateBgTo).every((value) => value === 0)) {
      return; // if so, do nothing
    }
    if (!tangentialVector.current.equals({ x: 0, y: 0 })) {
      // we reverse the tangentialVector to work with the moveBgTo function
      const { destination, duration } = moveBgTo(
        tangentialVector.current,
        translateBgFrom.current,
        translateBgTo.current,
        totalBgTime,
        startBgTime,
        movingBgRef,
        tangentialVector,
        tangentialSpeed,
        vector,
      );
      setTransitionBgDuration(duration);
      translateBgTo.current = destination;
    }
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    updateHelmCoords(e, e.currentTarget);
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    const touch = e.touches[0];
    updateHelmCoords(touch, e.currentTarget);
  }

  /**
   * Updates the translation coordinates for the helm control.
   * used by handleMouseMove and handleTouchMove
   * @param coords MouseEvent | Touch
   * @param currentTarget HTMLDivElement
   */
  function updateHelmCoords(
    coords: React.MouseEvent<HTMLDivElement, MouseEvent> | React.Touch,
    currentTarget: HTMLDivElement,
  ) {
    const rect = currentTarget.getBoundingClientRect();

    const newPos: Vector = new Vector({
      x: coords.clientX,
      y: coords.clientY,
    })
      .subtract({ x: rect.left, y: rect.top })
      .subtract({
        x: currentTarget.clientWidth / 2,
        y: currentTarget.clientHeight / 2,
      });

    const now = Date.now();
    moveStarsTo(
      newPos,
      STAR_SPEED,
      now,
      translateHelmFrom,
      durationPayload,
      translateHelmTo,
      totalHelmTime,
      startHelmTime,
      translateBgFrom,
      translateBgTo,
      totalBgTime,
      startBgTime,
      movingHelmRef,
      setTransitionHelmDuration,
      setTranslateHelmTo,
      setTransitionBgDuration,
      tangentialVector,
      tangentialSpeed,
      vector,
    );
  }

  useEffect(() => {
    /* requestAnimationFrame is required for firefox compatibility to update the duration properly if the duration is modified mid-flight */
    requestAnimationFrame(() => {
      if (durationPayload.current) {
        setTransitionBgDuration(durationPayload.current.duration);
        translateBgTo.current = durationPayload.current.destination;
        durationPayload.current = undefined;
      }
    });
  }, [transitionBgDuration]);

  function handleRightClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
  }

  function handleResetDirection() {
    resetDirection(
      translateBgFrom,
      translateBgTo,
      totalBgTime,
      startBgTime,
      movingBgRef,
      setTransitionBgDuration,
      tangentialVector,
      tangentialSpeed,
      vector,
      durationPayload,
      translateHelmTo,
      setTransitionHelmDuration,
      setTranslateHelmTo,
    );
  }

  return (
    <div className={style.movingStarsParent}>
      <div
        className={style.bg}
        onMouseMove={handleMouseMove}
        onContextMenu={handleRightClick}
        onTouchMove={handleTouchMove}
        onMouseOut={handleResetDirection}
        onTouchEnd={handleResetDirection}
        ref={testingParentRef}
      >
        <div
          onTransitionEnd={applyPartialBgMovementVector}
          className={style.backgroundControl}
          style={{
            transform: `translate(${-translateBgTo.current
              .x}px, ${-translateBgTo.current.y}px)`,
            ...transitionBgDuration,
          }}
          ref={movingBgRef}
        >
          <Image
            className={style.bgImage}
            alt="background"
            src={stars}
            placeholder="blur"
            blurDataURL={starsSmallBase64}
          />
        </div>
        <div
          className={style.helmControl}
          style={{
            transform: `translateX(${translateHelmTo.x}px) translateY(${translateHelmTo.y}px)`,
            transitionDuration: `${transitionHelmDuration}`,
          }}
          ref={movingHelmRef}
        >
          <div className={style.starLayer}></div>
          <div className={style.starLayer}></div>
          <div className={style.starLayer}></div>
          <div className={style.center}></div>
        </div>
      </div>
    </div>
  );
}
