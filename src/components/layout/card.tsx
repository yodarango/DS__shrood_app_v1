import { Icon, MenuSlideUp } from "..";
import { useState } from "react";

import "./card.css";

type TCard = {
  height?: number;
  width?: number;
  children: any;
};
export const Card = ({ height, width, children }: TCard) => {
  console.log(children);
  const headerChildren: JSX.Element[] = children.filter(
    (child: JSX.Element) =>
      child.type.name === "CardOptions" || child.type.name === "CardAvatar"
  );

  const footerChildren: JSX.Element[] = children.filter(
    (child: JSX.Element) =>
      child.type.name === "CardActionsLeft" ||
      child.type.name === "CardActionsRight"
  );

  const contentChild: JSX.Element = children.find(
    (child: JSX.Element) => child.type.name === "CardContent"
  );

  return (
    <div className='dr-card-34kt p-3' style={{ height, width }}>
      <div
        className={`dr-card-34kt_header pb-2 d-flex align-items-center ${
          headerChildren.length > 1
            ? "justify-content-between"
            : "justify-content-start"
        }`}
      >
        {children.find(
          (child: JSX.Element) => child.type.name === "CardAvatar"
        )}

        {children.find(
          (child: JSX.Element) => child.type.name === "CardOptions"
        )}
      </div>
      {children.find((child: JSX.Element) => child.type.name === "CardImage")}

      {contentChild && (
        <div className='mt-2'>
          {children.find(
            (child: JSX.Element) => child.type.name === "CardContent"
          )}
        </div>
      )}

      <div
        className={`dr-card-34kt_footer pt-2 d-flex align-items-center ${
          footerChildren.length > 1
            ? "justify-content-between"
            : "justify-content-start"
        }`}
      >
        {children.find(
          (child: JSX.Element) => child.type.name === "CardActionsLeft"
        )}
        {children.find(
          (child: JSX.Element) => child.type.name === "CardActionsRight"
        )}
      </div>
    </div>
  );
};

type CardImage = {
  className?: string;
  height?: number;
  width?: number;
  style?: object;
  src: string;
  alt: string;
};
export const CardImage = ({
  className,
  height,
  width,
  style,
  src,
  alt,
}: CardImage) => {
  return (
    <div
      className={`dr-card-image-04rq d-flex align-items-center justify-content-center gap-2 ${className}`}
      style={{ height, width }}
    >
      <img src={src} alt={alt} style={style} />
    </div>
  );
};

type CardOptions = {
  iconProps?: typeof Icon;
  secondary?: boolean;
  primary?: boolean;
  error?: boolean;
  children: any;
  icon: string;
};

export const CardOptions = ({
  iconProps,
  secondary,
  children,
  primary,
  error,
  icon,
}: CardOptions) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='dr-card-options-20lk'>
      <MenuSlideUp
        icon={<Icon name={icon} {...iconProps} />}
        onClose={() => setIsOpen(false)}
        secondary={secondary}
        primary={primary}
        error={error}
        open={isOpen}
      >
        {children}
      </MenuSlideUp>
    </div>
  );
};

type TCardActionsLeft = {
  children: any;
};
export const CardActionsLeft = ({ children }: TCardActionsLeft) => {
  return <div>{children}</div>;
};

type TCardActionsRight = {
  children: any;
};
export const CardActionsRight = ({ children }: TCardActionsRight) => {
  return <div>{children}</div>;
};

type TCardContent = {
  children: any;
};
export const CardContent = ({ children }: TCardContent) => {
  return <div>{children}</div>;
};
