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
import { Icon } from "..";

// styles
import styles from "./time_stamp.module.css";

export type TimeStampProps = {
  label: string | JSX.Element | React.ReactNode;
  labelProps?: typeof Paragraph;
  iconProps: typeof Icon;
  className?: string;
  fontSize?: string;
  colorId?: string;
  niceTime: string;
  quiet?: boolean;
  time: string;
};

export const ExpandableTag = ({
  fontSize,

  label,
  hiddenLabel,

  className,

  labelProps,
}: TimeStampProps) => {
  const [isOpenTimeStamp, setIsOpenTimeStamp] = useState<boolean>(false);

  return (
    <div className={`dr-expandable-tab-container `}>
      {!isOpenTimeStamp && (
        <div
          className={`dr-expandable-tab-container_closed ${className}`}
          onClick={() => setIsOpenTimeStamp(true)}
        >
          <Paragraph fontSize={fontSize || 10} lineHeight={1} {...labelProps}>
            {label}
          </Paragraph>
        </div>
      )}

      {isOpenTimeStamp && (
        <div className={`dr-expandable-tab-container_open ${className}`}>
          <Paragraph fontSize={fontSize || 10} {...labelProps}>
            {hiddenLabel}
          </Paragraph>
          <div
            className={`dr-expandable-tab-container_icon`}
            onClick={() => setIsOpenTimeStamp(false)}
          >
            <Icon name='remove' {...iconProps} />
          </div>
        </div>
      )}
    </div>
  );
};
