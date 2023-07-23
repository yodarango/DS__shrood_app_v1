import { IconButton as MIconButton } from "@mui/material";
import "./icon_button.css";

interface TButton {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
}
export const IconButton: React.FC<
  React.ComponentProps<typeof MIconButton> & TButton
> = (props: any) => {
  if (props.primary)
    return <MIconButton {...props} variant='contained' color='primary' />;

  if (props.secondary)
    return <MIconButton {...props} variant='outlined' color='primary' />;

  if (props.danger)
    return <MIconButton {...props} variant='contained' color='error' />;

  return <MIconButton {...props} />;
};
