/**************************************************************************************
-  renders a time stamp that calculates ellapsed time since the date of the post by 
   the help of a helper fucntion.
-  Three kind of cards can be rendered:
      1. default which is a css { background-color:var(--secondary-color)} 
      2. custom color wich has inline styles with style={{backgroundColor: custom color}}
         the customColor is passed in the props 
      3. Pass a css id in the props wich will assign a background by based in the 
         globals.css
***************************************************************************************/
import React, { useState } from "react";

// comps
import { Paragraph } from "..";
import { Icon } from "..";

// styles
import "./expandable_tag.css";

export type TimeStampProps = {
  // hiddenLabel: string | JSX.Element | React.ReactNode;
  // label: string | JSX.Element | React.ReactNode;
  labelProps?: typeof Paragraph;
  iconProps?: typeof Icon;
  className?: string;
  children?: any;
  // children: any;
};

export const ExpandableTag = ({
  className = "",
  iconProps,
  children,
}: TimeStampProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`dr-expandable-tab-container d-inline-block`}>
      {!isOpen && (
        <div
          className={`dr-expandable-tab-container_closed py-1 px-2 d-flex align-items-center justify-content-center ${className} `}
          onClick={() => setIsOpen(true)}
        >
          <div>{children[0]}</div>
        </div>
      )}

      {isOpen && (
        <div className={`position-relative${className}`}>
          <div
            className={`dr-expandable-tab-container_open py-1 ps-2 pe-6 d-flex align-items-center justify-content-center ${className} `}
          >
            {React.cloneElement(children[1])}
          </div>
          <div
            className={`dr-expandable-tab-container_icon position-absolute d-flex align-items-center justify-content-center ${className} `}
            onClick={() => setIsOpen(false)}
          >
            <Icon name='remove' {...iconProps} />
          </div>
        </div>
      )}
    </div>
  );
};
