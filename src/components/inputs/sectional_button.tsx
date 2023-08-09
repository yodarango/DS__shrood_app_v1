import { Button, Icon, Paragraph } from "..";
import { TIcons } from "./icon";

import styles from "./sectional_button.module.css";

type TSectionalButton = {
  onClick?: React.MouseEventHandler<HTMLDivElement> | (() => void);
  icon?: string | React.ReactNode | JSX.Element | typeof Icon;
  className?: string;
  iconProps?: Omit<TIcons, "name">;
  style?: React.CSSProperties;
  href?: string;
  label: any;
  value: any;
};

export const SectionalButton: React.FC<
  Omit<React.ComponentProps<typeof Button>, "color"> & TSectionalButton
> = (props: any) => {
  const {
    icon = "arrowForth",
    className = "",
    iconProps,
    onClick,
    label,
    value,
    href,
    ...rest
  } = props;

  return (
    <button
      className={`${styles.sectionalButton23kf} w-100 py-2 px-3 shadow d-flex align-items-center justify-content-between bg-secondary ${className}`}
      onClick={onClick}
      {...rest}
    >
      <div className={`${styles.sectionalButton23kfLabel}`}>
        {typeof label === "string" && <Paragraph>{label}</Paragraph>}
        {typeof label !== "string" && label}
      </div>
      <div
        className={`${styles.sectionalButton23kfEnd} d-flex align-items-center justify-content-start`}
      >
        <div className={`${styles.endValue} me-2`}>
          {typeof value === "string" && <Paragraph>{value}</Paragraph>}
          {typeof value !== "string" && value}
        </div>
        <div className='end_icon'>
          <Icon name={icon} {...iconProps} />
        </div>
      </div>
    </button>
  );
};
