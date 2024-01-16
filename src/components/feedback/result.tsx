import {
  ResourceNotFoundImage,
  FinancialHelpImage,
  EmptyImage,
  ErrorImage,
} from ".";
import { PasscodeNeeded } from "./passcode";
import { Search } from "./search";
import { Thankyou } from "./thank_you";
import { Try } from "./try";
import { Welcome } from "./welcome";

type TResult = {
  type:
    | "financialSupport"
    | "notFound"
    | "passcode"
    | "thankYou"
    | "welcome"
    | "search"
    | "error"
    | "empty"
    | "try";
  size?: "small" | "medium" | "large";
  description: string;
  customSize?: number;
  className?: string;
};
export const Result = ({
  description,
  customSize,
  className,
  type,
  size,
}: TResult) => {
  if (type === "error") {
    return (
      <ErrorImage
        size={size}
        customSize={customSize}
        description={description}
        className={className}
      />
    );
  }

  if (type === "empty") {
    return (
      <EmptyImage
        size={size}
        customSize={customSize}
        description={description}
        className={className}
      />
    );
  }

  if (type === "financialSupport") {
    return (
      <FinancialHelpImage
        size={size}
        customSize={customSize}
        description={description}
        className={className}
      />
    );
  }

  if (type === "notFound") {
    return (
      <ResourceNotFoundImage
        size={size}
        customSize={customSize}
        description={description}
        className={className}
      />
    );
  }

  if (type === "passcode") {
    return (
      <PasscodeNeeded
        size={size}
        customSize={customSize}
        description={description}
        className={className}
      />
    );
  }

  if (type === "search") {
    return (
      <Search
        size={size}
        customSize={customSize}
        description={description}
        className={className}
      />
    );
  }

  if (type === "thankYou") {
    return (
      <Thankyou
        size={size}
        customSize={customSize}
        description={description}
        className={className}
      />
    );
  }

  if (type === "try") {
    return (
      <Try
        size={size}
        customSize={customSize}
        description={description}
        className={className}
      />
    );
  }

  if (type === "welcome") {
    return (
      <Welcome
        size={size}
        customSize={customSize}
        description={description}
        className={className}
      />
    );
  }

  return <></>;
};
