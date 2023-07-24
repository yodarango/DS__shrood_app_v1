import { Button as MButton } from "@mui/material";
import "./button_with_direction.css";
import { Icon } from "..";

type IButtonWithDirection = {
  children: React.ReactNode | JSX.Element | string;
  direction?: "left" | "right";
  secondary?: boolean;
  iconColor?: string;
  primary?: boolean;
};

export const ButtonWithDirection: React.FC<
  React.ComponentProps<typeof MButton> & IButtonWithDirection
> = (props: any) => {
  const { direction, primary, secondary, ...rest } = props;

  if (primary && props.direction === "right")
    return (
      <MButton
        {...rest}
        endIcon={<Icon className={props.className} name='arrowForth' />}
      >
        {props.children}
      </MButton>
    );
  if (primary && direction === "left")
    return (
      <MButton
        {...rest}
        variant='text'
        startIcon={<Icon className={props.className} name='arrowBack' />}
      >
        {props.children}
      </MButton>
    );
  if (secondary && direction === "right")
    return (
      <MButton
        {...rest}
        variant='text'
        endIcon={<Icon className={props.className} name='arrowForthLong' />}
      >
        {" "}
        {props.children}
      </MButton>
    );
  if (secondary && direction === "left")
    return (
      <MButton
        {...rest}
        variant='text'
        startIcon={<Icon className={props.className} name='arrowBackLong' />}
      >
        {props.children}
      </MButton>
    );
};
