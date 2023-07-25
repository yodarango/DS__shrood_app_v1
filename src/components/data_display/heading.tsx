import Typography from "@mui/material/Typography";
import "./heading.css";

interface THeading {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export const Heading: React.FC<
  React.ComponentProps<typeof Typography> & THeading
> = (props: any) => {
  const { variant, lineHeight, component, fontWeight, ...rest } = props;
  return (
    <Typography
      lineHeight={lineHeight || 1.6}
      fontWeight={fontWeight || "bold"}
      component={component}
      variant={variant}
      {...rest}
    />
  );
};
