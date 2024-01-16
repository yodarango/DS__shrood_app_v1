import { IconButton as MIconButton } from "@mui/material";
import "./icon_button.css";
import { Loading } from "..";

export interface IIconButtonCustom {
  secondary?: boolean;
  primary?: boolean;
  loading?: boolean;
  danger?: boolean;
}
export type IIConButton = React.FC<
  Omit<React.ComponentProps<typeof MIconButton>, "size" | "variant"> &
    IIconButtonCustom
>;

export const IconButton: IIConButton = (props: any) => {
  const { primary, secondary, danger, loading, sx, ...rest } = props;

  const btnSize = sx || { width: 40, height: 40 };
  if (primary)
    if (loading)
      return (
        <MIconButton sx={btnSize} {...rest} variant='contained' color='primary'>
          <Loading primary duration={1} />
        </MIconButton>
      );
    else
      return (
        <MIconButton
          sx={btnSize}
          {...rest}
          variant='contained'
          color='primary'
        />
      );

  if (secondary)
    if (loading)
      return (
        <MIconButton sx={btnSize} {...rest} variant='outlined' color='primary'>
          <Loading secondary duration={1} />
        </MIconButton>
      );
    else
      return (
        <MIconButton
          sx={btnSize}
          {...rest}
          variant='outlined'
          color='primary'
        />
      );

  if (danger)
    if (loading)
      return (
        <MIconButton sx={btnSize} {...rest} variant='contained' color='error'>
          <Loading danger duration={1} />
        </MIconButton>
      );
    else
      return (
        <MIconButton sx={btnSize} {...rest} variant='contained' color='error' />
      );

  return <MIconButton sx={btnSize} {...rest} />;
};
