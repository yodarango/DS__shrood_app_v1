import { Avatar as MAvatar } from "@mui/material";
import "./avatar.css";

interface IAvatar {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  error?: boolean;
}
export const Avatar: React.FC<
  React.ComponentProps<typeof MAvatar> & IAvatar
> = (props: any) => {
  const { primary, secondary, tertiary, error, sx, ...rest } = props;

  let variantClass = "avatar-primary";
  if (secondary) variantClass = "avatar-secondary";
  else if (tertiary) variantClass = "avatar-tertiary";
  else if (error) variantClass = "avatar-error";

  return (
    <div
      className={`d-inline-flex align-items-center justify-content-center ring-${variantClass}`}
      style={{
        width:
          typeof sx.width === "string"
            ? sx.width
            : `${sx?.width * 0.1 || 5}rem`,
        height:
          typeof sx.height === "string"
            ? sx.height
            : `${sx?.height * 0.1 || 5}rem`,
      }}
    >
      <MAvatar {...rest} />
    </div>
  );
};
