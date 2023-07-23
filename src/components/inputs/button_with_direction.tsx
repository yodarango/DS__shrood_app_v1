import { Button as MButton } from "@mui/material";
import "./button_with_direction.css";
import { Icon } from "..";

type IButtonWithDirection = {
  children: React.ReactNode | JSX.Element | string;
  direction?: "left" | "right";
  secondary?: boolean;
  primary?: boolean;
};

export const ButtonWithDirection: React.FC<
  React.ComponentProps<typeof MButton> & IButtonWithDirection
> = (props: any) => {
  if (props.primary && props.direction === "right")
    return (
      <MButton
        {...props}
        endIcon={<Icon color={props.color} name='arrowForth' />}
      >
        {" "}
        {props.children}
      </MButton>
    );
  if (props.primary && props.direction === "left")
    return (
      <MButton
        {...props}
        variant='text'
        startIcon={<Icon color={props.color} name='arrowBack' />}
      >
        {" "}
        {props.children}
      </MButton>
    );
  if (props.secondary && props.direction === "right")
    return (
      <MButton
        {...props}
        variant='text'
        endIcon={<Icon color={props.color} name='arrowForthLong' />}
      >
        {" "}
        {props.children}
      </MButton>
    );
  if (props.secondary && props.direction === "left")
    return (
      <MButton
        {...props}
        variant='text'
        startIcon={<Icon color={props.color} name='arrowBackLong' />}
      >
        {props.children}
      </MButton>
    );
};
