import { IconButton as MIconButton } from "@mui/material";
import "./icon_button.css";

export interface IIconButtonCustom {
  secondary?: boolean;
  primary?: boolean;
  danger?: boolean;
}
export type IIConButton = React.FC<
  Omit<React.ComponentProps<typeof MIconButton>, "size" | "variant"> &
    IIconButtonCustom
>;

export const IconButton: IIConButton = (props: any) => {
  const { primary, secondary, danger, sx, ...rest } = props;
  const btnSize = sx || { width: 40, height: 40 };
  if (primary)
    return (
      <MIconButton sx={btnSize} {...rest} variant='contained' color='primary' />
    );

  if (secondary)
    return (
      <MIconButton sx={btnSize} {...rest} variant='outlined' color='primary' />
    );

  if (danger)
    return (
      <MIconButton sx={btnSize} {...rest} variant='contained' color='error' />
    );

  return <MIconButton sx={btnSize} {...rest} />;
};
