import Typography from "@mui/material/Typography";
import "./paragraph.css";

export const Paragraph: typeof Typography = (props: any) => {
  const { fontSize, lineHeight, fontWeight, ...rest } = props;
  return (
    <Typography
      fontSize={fontSize ? `${fontSize * 0.1}rem` : "1.6rem"}
      lineHeight={lineHeight || 1.6}
      fontWeight={fontWeight || 400}
      variant='body1'
      components='p'
      {...rest}
    />
  );
};
