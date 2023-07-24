import { Button as MButton } from "@mui/material";
import "./button.css";

interface TButton {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
}
export const Button: React.FC<
  React.ComponentProps<typeof MButton> & TButton
> = (props: any) => {
  const { primary, secondary, danger, ...rest } = props;

  if (primary) return <MButton {...rest} variant='contained' color='primary' />;

  if (secondary)
    return <MButton {...rest} variant='outlined' color='primary' />;

  if (danger) return <MButton {...rest} variant='contained' color='error' />;

  return <MButton {...rest} />;
};
