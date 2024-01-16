import { Button as MButton } from "@mui/material";
import "./button.css";
import { IfElse } from "../utilities";
import { Loading } from "../feedback";

export interface IButton {
  secondary?: boolean;
  loading?: boolean;
  primary?: boolean;
  danger?: boolean;
}
export type TExtendedButton = React.FC<
  Omit<React.ComponentProps<typeof MButton>, "color"> & IButton
>;

export const Button: TExtendedButton = (props: any) => {
  const {
    className = "",
    primary,
    secondary,
    danger,
    children,
    loading,
    disabled,
    ...rest
  } = props;

  if (primary)
    return (
      <MButton
        {...rest}
        disabled={loading || disabled}
        variant='contained'
        color='primary'
        className={className}
      >
        <IfElse condition={loading}>
          <Loading type='small' />
          {children}
        </IfElse>
      </MButton>
    );

  if (secondary)
    return (
      <MButton
        className={`${className} dr-secondary`}
        disabled={loading || disabled}
        variant='outlined'
        color='primary'
        {...rest}
      >
        <IfElse condition={loading}>
          <Loading type='small' />
          {children}
        </IfElse>
      </MButton>
    );

  if (danger)
    return (
      <MButton
        className={className}
        disabled={loading || disabled}
        variant='contained'
        color='error'
        {...rest}
      >
        <IfElse condition={loading}>
          <Loading type='small' />
          {children}
        </IfElse>
      </MButton>
    );

  return (
    <MButton {...rest}>
      {" "}
      <IfElse condition={loading}>
        <Loading type='small' />
        {children}
      </IfElse>
    </MButton>
  );
};
