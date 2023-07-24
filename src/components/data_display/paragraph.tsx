import Typography from "@mui/material/Typography";
import "./paragraph.css";

export const Paragraph: typeof Typography = (props: any) => {
  return <Typography {...props} variant='body1' components='p' />;
};
