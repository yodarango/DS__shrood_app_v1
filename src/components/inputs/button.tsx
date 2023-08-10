import { Button as MButton } from "@mui/material";
import "./button.css";

export interface IButton {
  secondary?: boolean;
  primary?: boolean;
  danger?: boolean;
}
export type TExtendedButton = React.FC<
  Omit<React.ComponentProps<typeof MButton>, "color"> & IButton
>;

export const Button: TExtendedButton = (props: any) => {
  const { className, primary, secondary, danger, ...rest } = props;

  if (primary) return <MButton {...rest} variant='contained' color='primary' />;

  if (secondary)
    return (
      <MButton
        className={`${className || ""} dr-secondary`}
        variant='outlined'
        color='primary'
        {...rest}
      />
    );

  if (danger) return <MButton {...rest} variant='contained' color='error' />;

  return <MButton {...rest} />;
};
