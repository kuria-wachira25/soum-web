import { Either } from "./either.type";
import { Right } from "./either.right";

export class Left<L, A> {
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  isLeft(): this is Left<L, A> {
    return true;
  }

  isRight(): this is Right<L, A> {
    return false;
  }
}

export const left = <L, A>(l: L): Either<L, A> => {
  return new Left(l);
};
