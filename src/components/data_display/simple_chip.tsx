import { TIcons } from "../inputs/icon";
import { Paragraph } from ".";
import { Icon } from "..";

import styles from "./simple_chip.module.css";

type TAboutMeItemProps = {
  icon?: string | React.ReactNode | JSX.Element;
  style?: React.CSSProperties;
  placeholder?: string;
  className?: string;
  iconProps?: TIcons;
  children: string;
};

export const SimpleChip = ({
  className = "",
  style = {},
  placeholder,
  iconProps,
  children,
  icon,
}: TAboutMeItemProps) => {
  return (
    <div
      className={`d-flex align-items-center justify-content-start p-2 shadow ${styles.simpleChip09jk} ${className}`}
      style={style}
    >
      <div className={`me-3 ${styles.simpleChip09jkIcon}`}>
        {typeof icon === "string" && <Icon name={icon} {...iconProps} />}
        {typeof icon !== "string" && icon}
      </div>
      <div className={styles.simpleChip09jkContent}>
        <Paragraph>{children || placeholder}</Paragraph>
      </div>
    </div>
  );
};
