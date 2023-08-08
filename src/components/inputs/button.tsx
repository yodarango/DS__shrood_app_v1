import { Button as MButton } from "@mui/material";
import "./button.css";

export interface TButton {
  secondary?: boolean;
  primary?: boolean;
  danger?: boolean;
}

export const Button: React.FC<
  Omit<React.ComponentProps<typeof MButton>, "color"> & TButton
> = (props: any) => {
  const { primary, secondary, danger, ...rest } = props;

  if (primary) return <MButton {...rest} variant='contained' color='primary' />;

  if (secondary)
    return <MButton {...rest} variant='outlined' color='primary' />;

  if (danger) return <MButton {...rest} variant='contained' color='error' />;

  return <MButton {...rest} />;
};
