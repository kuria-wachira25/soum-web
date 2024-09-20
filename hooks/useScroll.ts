"use client";

import { RefObject, useRef, useState } from "react";

export type useScrollProps = {
  scrollChange?: number;
};

export const useScroll = <R extends HTMLElement>(
  props: useScrollProps
): {
  ref: RefObject<R>;
  onScrollToStart: () => void;
  onScrollToEnd: () => void;
  isAtTheBeginning: boolean;
  isAtTheEnd: boolean;
} => {
  const ref = useRef<R>(null);

  const [position, setPosition] = useState<number>(0);
  const [isAtTheBeginning, setIsAtTheBeginning] = useState<boolean>(true);
  const [isAtTheEnd, setIsAtTheEnd] = useState<boolean>(false);

  const onScroll = (forward: boolean) => {
    if (!ref.current) {
      return;
    }

    const scrollChange = props.scrollChange ?? ref.current.clientWidth - 100;

    const maxScroll = ref.current.scrollWidth - ref.current.clientWidth;

    const newPosition = forward
      ? Math.min(position + scrollChange, maxScroll)
      : Math.max(position - scrollChange, 0);

    setPosition(newPosition);

    setIsAtTheBeginning(newPosition <= 0);

    setIsAtTheEnd(newPosition >= maxScroll);

    ref.current.scrollLeft = newPosition;
  };

  const onScrollToStart = (): void => {
    onScroll(false);
  };

  const onScrollToEnd = (): void => {
    onScroll(true);
  };

  return {
    onScrollToStart,
    onScrollToEnd,
    ref,
    isAtTheBeginning,
    isAtTheEnd,
  };
};
