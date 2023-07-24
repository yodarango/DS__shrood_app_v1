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
  const { primary, secondary, danger, ...rest } = props;
  if (primary)
    return <MIconButton {...rest} variant='contained' color='primary' />;

  if (secondary)
    return <MIconButton {...rest} variant='outlined' color='primary' />;

  if (danger)
    return <MIconButton {...rest} variant='contained' color='error' />;

  return <MIconButton {...rest} />;
};
