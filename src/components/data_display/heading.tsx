import Typography from "@mui/material/Typography";
import "./heading.css";

interface THeading {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export const Heading: React.FC<
  React.ComponentProps<typeof Typography> & THeading
> = (props: any) => {
  return (
    <Typography {...props} variant={props.variant} component={props.variant} />
  );
};
