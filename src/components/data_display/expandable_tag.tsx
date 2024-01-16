import { useState } from "react";
import { Paragraph } from "..";

import styles from "./expandable_tag.module.css";

export type TimeStampProps = {
  labelProps?: typeof Paragraph;
  backgroundColor?: string;
  secondary?: boolean;
  className?: string;
  primary?: boolean;
  danger?: boolean;
  children?: any;
};

export const ExpandableTag = ({
  backgroundColor,
  className = "",
  secondary,
  children,
  primary,
  danger,
}: TimeStampProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  let bkgColorClass = "";

  switch (true) {
    case primary !== undefined:
      bkgColorClass = styles.primary;
      break;
    case secondary !== undefined:
      bkgColorClass = styles.secondary;
      break;
    case danger !== undefined:
      bkgColorClass = styles.danger;
      break;
    default:
      bkgColorClass = styles.secondary;
      break;
  }
  return (
    <div className={`${styles.drExpandableTabContainer} d-inline-block`}>
      {!isOpen && (
        <div
          className={`${styles.drExpandableTabContainerClosed} py-1 px-2 d-flex align-items-center justify-content-center ${className} ${bkgColorClass}`}
          style={{ background: backgroundColor || "" }}
          onClick={() => setIsOpen(true)}
        >
          <div>{children[0]}</div>
        </div>
      )}

      {isOpen && (
        <div
          className={`${styles.drExpandableTabContainerOpen} py-1 px-2 d-flex align-items-center justify-content-center ${className}  ${bkgColorClass}`}
          style={{ backgroundColor: backgroundColor || "" }}
          onClick={() => setIsOpen(false)}
        >
          <div>{children[1]}</div>
        </div>
      )}
    </div>
  );
};
