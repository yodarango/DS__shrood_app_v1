import { IconButton as MButton } from "@mui/material";
import "./icon_button.css";

interface TButton {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
}
export const IconButton: React.FC<
  React.ComponentProps<typeof MButton> & TButton
> = (props: any) => {
  if (props.primary)
    return <MButton {...props} variant='contained' color='primary' />;

  if (props.secondary)
    return <MButton {...props} variant='outlined' color='primary' />;

  if (props.danger)
    return <MButton {...props} variant='contained' color='error' />;

  return <MButton {...props} />;
};