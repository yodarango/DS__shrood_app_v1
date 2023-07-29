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
import { useState } from "react";

// comps
import { Paragraph } from "..";

// styles
import "./expandable_tag.css";

export type TimeStampProps = {
  labelProps?: typeof Paragraph;
  className?: string;
  children?: any;
};

export const ExpandableTag = ({ className = "", children }: TimeStampProps) => {
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
        <div
          className={`dr-expandable-tab-container_open py-1 px-2 d-flex align-items-center justify-content-center ${className} `}
          onClick={() => setIsOpen(false)}
        >
          <div>{children[1]}</div>
        </div>
      )}
    </div>
  );
};
