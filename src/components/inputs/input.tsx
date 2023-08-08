import { TextField } from "@mui/material";
import "./input.css";

export const Input: React.FC<
  Omit<React.ComponentProps<typeof TextField>, "color" | "variant">
> = (props: any) => {
  const { variant, multiline, ...rest } = props;
  return <TextField variant='outlined' {...rest} multiline={multiline} />;
};
