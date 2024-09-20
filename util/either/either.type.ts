import { Left } from "./either.left";
import { Right } from "./either.right";

export type Either<L, A> = Left<L, A> | Right<L, A>;
