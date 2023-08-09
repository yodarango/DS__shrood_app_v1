import { useState } from "react";
import { Paragraph } from "..";

import styles from "./expandable_tag.module.css";

export type TimeStampProps = {
  labelProps?: typeof Paragraph;
  className?: string;
  children?: any;
};

export const ExpandableTag = ({ className = "", children }: TimeStampProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`${styles.drExpandableTabContainer} d-inline-block`}>
      {!isOpen && (
        <div
          className={`${styles.drExpandableTabContainerClosed} py-1 px-2 d-flex align-items-center justify-content-center ${className} `}
          onClick={() => setIsOpen(true)}
        >
          <div>{children[0]}</div>
        </div>
      )}

      {isOpen && (
        <div
          className={`${styles.drExpandableTabContainerOpen} py-1 px-2 d-flex align-items-center justify-content-center ${className} `}
          onClick={() => setIsOpen(false)}
        >
          <div>{children[1]}</div>
        </div>
      )}
    </div>
  );
};
