import { AvatarWithLabel, Button, Icon, MenuSlideUp, Paragraph } from "..";
import React, { ReactElement, useState } from "react";

import "./card.css";
import { IAvatarWithLabel } from "../data_display/avatar_with_label";
import { TButton } from "../inputs/button";
import { COLOR_TERTIARY } from "../../assets/tokens";

type TCard = {
  height?: number;
  width?: number;
  children: any;
};
export const Card = ({ height, width, children }: TCard) => {
  const headerChildren: JSX.Element[] = children.filter(
    (child: JSX.Element) =>
      child.type.name === "CardOptions" || child.type.name === "AvatarWithLabel"
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
          (child: JSX.Element) => child.type.name === "AvatarWithLabel"
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
  danger?: boolean;
  children: any;
  icon: string;
};

export const CardOptions = ({
  iconProps,
  secondary,
  children,
  primary,
  danger,
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
        danger={danger}
        open={isOpen}
      >
        {React.Children.map(children, (child: ReactElement) =>
          React.cloneElement(child, {
            secondary,
            primary,
            danger,
          })
        )}
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
  expanderProps?:
    | (typeof Button & TButton & { color?: string })
    | (TButton & { color?: string });
  includeShowMore?: boolean;
  maxCount?: number;
  children: any;
};
export const CardContent = ({
  includeShowMore = true,
  expanderProps = { color: COLOR_TERTIARY },
  maxCount = 100,
  children,
}: TCardContent) => {
  const [isOpen, setIsOpen] = useState(false);
  let { primary, secondary, danger, color, ...rest } = expanderProps;

  console.log(primary);
  if (typeof children === "string")
    return (
      <div>
        <Paragraph>
          {!isOpen ? `${children.slice(0, maxCount)}...` : children}
        </Paragraph>
        {includeShowMore && (
          <div
            style={{ color }}
            className='dr-card-image-04rq_expander-container'
          >
            <Button
              className='dr-card-image-04rq_expander btn btn-link p-0 m-0'
              onClick={() => setIsOpen(!isOpen)}
              secondary={secondary}
              primary={primary}
              danger={danger}
              variant='text'
              {...rest}
            >
              See more
            </Button>
          </div>
        )}
      </div>
    );

  if (typeof children === "object" && children?.props?.children)
    return <div>{children}</div>;
};

type TCardContentMeta = {
  children: any;
};
export const CardContentMeta = ({ children }: TCardContentMeta) => {
  return <div>{children}</div>;
};
