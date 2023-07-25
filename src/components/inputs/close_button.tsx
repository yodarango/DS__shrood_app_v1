import { Icon } from "./icon";
import "./close_button.css";

type TCloseContentProps = {
  onClick?: () => void;
  className?: string;
  size?: string;
  color?: string;
};

export const CloseButton = (props: TCloseContentProps) => {
  const { className = "", onClick, ...rest } = props;

  if (onClick) {
    return (
      <button
        className={`bg-transparent p-0 m-0 dr-close-content-icon ${className}`}
        onClick={onClick}
      >
        <Icon name='close' strokeWidth='60' {...rest} />
      </button>
    );
  } else {
    <div className='dr-close-content-icon' onClick={onClick}>
      <Icon name='close' strokeWidth='60' {...rest} />
    </div>;
  }
};
