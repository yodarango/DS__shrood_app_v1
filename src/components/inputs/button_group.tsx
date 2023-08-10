import "./button_group.css";
import React from "react";

type IButtonGroup = {
  children: React.ReactNode | readonly React.ReactNode[];
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
};

export const ButtonGroup = ({
  secondary,
  children,
  primary,
  danger,
}: IButtonGroup) => {
  let variant: string | undefined = undefined;

  if (!primary && !secondary && !danger) variant = "outlined";
  if (secondary) variant = "outlined";
  const childrenWithProps = React.Children.map(
    children,
    (child: React.ReactNode) => {
      if (React.isValidElement<any>(child)) {
        return React.cloneElement(child, {
          secondary,
          primary,
          variant,
          danger,
        });
      }
      return child;
    }
  );
  return (
    <div className='d-flex align-items-center justify-content-center dr-button-group-outline'>
      {childrenWithProps}
    </div>
  );
};
