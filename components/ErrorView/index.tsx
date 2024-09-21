import { Alert } from "@components/Alert";
import { AppError } from "@util/app.error/app.error";
import { Either } from "@util/either";
import { Left } from "@util/either/either.left";
import { useTranslations } from "next-intl";

export type ErrorViewProps = {
  children?: React.ReactNode;
  errors?: Array<Either<AppError, unknown> | AppError>;
  showComponentOnError?: boolean;
};

export const ErrorView = ({
  errors,
  children,
  showComponentOnError,
}: ErrorViewProps): JSX.Element => {
  const t = useTranslations("ErrorsMessages");

  const errorMessages = (
    errors?.map((error) => {
      if (error instanceof AppError) {
        return error.translation;
      } else {
        return (error as Left<AppError, unknown>).value.translation;
      }
    }) ?? []
  ).filter(Boolean);

  const showComponent = !!errorMessages.length
    ? showComponentOnError ?? false
    : true;

  return (
    <div className="flex flex-col gap-3">
      {!!errorMessages?.length && (
        <Alert>{errorMessages.map((errorMessage) => t(errorMessage))}</Alert>
      )}
      {showComponent ? children : null}
    </div>
  );
};
