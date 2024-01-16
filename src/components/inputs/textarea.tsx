import { TextareaAutosize } from "@mui/material";
import "./textarea.css";

export interface ITextarea {
  bordered?: boolean;
}

export const Textarea: React.FC<
  Omit<React.ComponentProps<typeof TextareaAutosize>, "color" | "variant">
> &
  ITextarea = (props: any) => {
  const { variant, multiline, className, bordered, ...rest } = props;
  return (
    <TextareaAutosize
      className={`${className} border border-tertiary dr-textarea-347fsj${
        bordered ? "--bordered" : ""
      }`}
      {...rest}
    />
  );
};
