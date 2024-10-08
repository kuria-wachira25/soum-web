import { Either } from "./either.type";
import { Left } from "./either.left";

export class Right<L, A> {
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  forceToRight(): A {
    return this.value;
  }

  forceToLeft(): L {
    return this.value as unknown as L;
  }

  isLeft(): this is Left<L, A> {
    return false;
  }

  isRight(): this is Right<L, A> {
    return true;
  }
}

export const right = <L, A>(a: A): Either<L, A> => {
  return new Right<L, A>(a);
};
