import { Avatar } from "../data_display/avatar";
import { Paragraph } from "./paragraph";
import "./avatar_with_label.css";
import React from "react";

export interface IAvatarWithLabel {
  label: string | React.ReactNode | JSX.Element;
  align?: "start" | "end" | "bottom" | "top";
  fontSize?: number;
}
export const AvatarWithLabel: React.FC<
  Omit<React.ComponentProps<typeof Avatar>, "variant"> & IAvatarWithLabel
> = (props: any) => {
  const { label, align, fontSize, ...rest } = props;

  // default row start
  let alignment = "flex-row align-items-center ";
  let margin = "ms-2";

  switch (align) {
    case "end":
      alignment = "flex-row-reverse justify-content-end align-items-center ";
      margin = "me-2";
      break;
    case "bottom":
      alignment = "flex-column justify-content-start align-items-start";
      margin = "mt-2";
      break;
    case "top":
      alignment = "flex-column-reverse justify-content-start align-items-start";
      margin = "mb-2";
      break;
  }
  return (
    <div className={`dr-avatar-with-label d-flex ${alignment}`}>
      <div className='dr-avatar-with-label_avatar'>
        <Avatar {...rest} />
      </div>

      <div
        className={`${margin} dr-avatar-with-label_label`}
        onClick={props?.onClick}
      >
        {(typeof label === "string" || typeof label === "number") && (
          <Paragraph fontSize={fontSize} lineHeight={0.8}>
            {label}
          </Paragraph>
        )}
        {typeof label !== "string" && typeof label !== "number" && label}
      </div>
    </div>
  );
};
