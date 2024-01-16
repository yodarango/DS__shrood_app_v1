import { Avatar } from "../data_display/avatar";
import { Paragraph } from "./paragraph";
import React from "react";

import styles from "./avatar_with_label.module.css";

export interface IAvatarWithLabel {
  label: string | React.ReactNode | JSX.Element;
  align?: "start" | "end" | "bottom" | "top";
  className?: string;
  fontSize?: number;
}
export const AvatarWithLabel: React.FC<
  Omit<React.ComponentProps<typeof Avatar>, "variant"> & IAvatarWithLabel
> = (props: any) => {
  const { label, align, fontSize, className, ...rest } = props;

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
      margin = "mt-0";
      break;
    case "top":
      alignment = "flex-column-reverse justify-content-start align-items-start";
      margin = "mb-2";
      break;
  }
  return (
    <div
      className={`${styles.drAvatarWithLabel} d-flex ${alignment} ${
        className || ""
      }`}
    >
      <div className={`${styles.drAvatarWithLabelAvatar}`}>
        <Avatar {...rest} />
      </div>

      <div
        className={`${margin} ${styles.drAvatarWithLabelLabel}`}
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
