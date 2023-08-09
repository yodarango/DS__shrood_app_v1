import { Icon } from "./icon";
import styles from "./close_button.module.css";

type TCloseContentProps = {
  onClick?: () => void;
  className?: string;
  color?: string;
  size?: number;
};

export const CloseButton = (props: TCloseContentProps) => {
  const { className = "", onClick, ...rest } = props;

  if (onClick) {
    return (
      <button
        className={`bg-transparent p-0 m-0 ${styles.drCloseContentIcon} ${className}`}
        onClick={onClick}
      >
        <Icon name='close' strokeWidth='60' {...rest} />
      </button>
    );
  } else {
    <div className={`${styles.drCloseContentIcon}`} onClick={onClick}>
      <Icon name='close' strokeWidth='60' {...rest} />
    </div>;
  }
};
