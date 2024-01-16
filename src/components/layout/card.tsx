import { Button, Icon, MenuSlideUp, Paragraph } from "..";
import React, { ReactElement, useState } from "react";
import { COLOR_TERTIARY } from "../../assets/tokens";
import { IButton } from "../inputs/button";

import "./card.css";

type TCard = {
  width?: number | string;
  className?: string;
  bordered?: boolean; // border around the card
  height?: number;
  children: any;
};

// Container component for all card children. See all the different names of the children below
// to see where each of them are rendered
export const Card = ({
  height,
  width,
  children,
  className,
  bordered,
}: TCard) => {
  const headerChildren: JSX.Element[] = children.filter(
    (child: JSX.Element) =>
      child.type.name === "CardOptions" ||
      child.type.name === "AvatarWithLabel" ||
      child.props["data-component-role"] === "AvatarWithLabel"
  );

  const footerChildren: JSX.Element[] = children.filter(
    (child: JSX.Element) =>
      child.type.name === "CardActionsLeft" ||
      child.type.name === "CardActionsRight"
  );

  const contentChild: JSX.Element = children.find(
    (child: JSX.Element) => child.type.name === "CardContent"
  );
  const contentMetaChild: JSX.Element = children.find(
    (child: JSX.Element) =>
      child.type.name === "CardContentMeta" ||
      child.props["data-component-role"] === "CardContentMeta"
  );

  return (
    <div
      className={`dr-card-34kt p-3 ${className} ${bordered ? "border" : ""}`}
      style={{ height, width }}
    >
      <div
        className={`dr-card-34kt_header pb-2 d-flex align-items-center ${
          headerChildren.length > 1
            ? "justify-content-between"
            : "justify-content-start"
        }`}
      >
        {/* avatar component. Since Some libraries like React Router DOm or Next have to wrap this component around to include a link, I am also including data-component-role */}
        {children.find(
          (child: JSX.Element) =>
            child.type.name === "AvatarWithLabel" ||
            child.props["data-component-role"] === "AvatarWithLabel"
        )}

        {/* options on the topright component */}
        {children.find(
          (child: JSX.Element) => child.type.name === "CardOptions"
        )}
      </div>
      {/* Post image component */}
      {children.find(
        (child: JSX.Element) =>
          child.type.name === "CardImage" ||
          child.props["data-component-role"] === "CardImage"
      )}

      {/* is the card contains any text component */}
      {contentMetaChild}

      {/* other content below the text */}
      {contentChild}

      {/* The bottom of the card component */}
      <div
        className={`dr-card-34kt_footer pt-2 d-flex align-items-center ${
          footerChildren.length > 1
            ? "justify-content-between"
            : "justify-content-start"
        }`}
      >
        {/* left side component */}
        {children.find(
          (child: JSX.Element) => child.type.name === "CardActionsLeft"
        )}

        {/* right side component */}
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
  style?: React.CSSProperties;
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
  closeOnSelect?: boolean; // whether to close the menu after an option is selected
  secondary?: boolean;
  primary?: boolean;
  loading?: boolean;
  danger?: boolean;
  children: any;
  icon: string;
};

export const CardOptions = ({
  iconProps,
  closeOnSelect,
  secondary,
  children,
  loading,
  primary,
  danger,
  icon,
}: CardOptions) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='dr-card-options-20lk'>
      <MenuSlideUp
        icon={<Icon name={icon} {...iconProps} />}
        onClose={() => setIsOpen(false)}
        closeOnSelect={closeOnSelect}
        secondary={secondary}
        loading={loading}
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
  return (
    <div className='d-flex align-items-center justify-content-start gap-2'>
      {children}
    </div>
  );
};

type TCardActionsRight = {
  children: any;
};
export const CardActionsRight = ({ children }: TCardActionsRight) => {
  return <div>{children}</div>;
};

type TCardContent = {
  expanderProps?:
    | (typeof Button & IButton & { color?: string })
    | (IButton & { color?: string });
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
              {!isOpen ? "See more" : "See less"}
            </Button>
          </div>
        )}
      </div>
    );

  if (typeof children === "object") return <div>{children}</div>;
};

type TCardContentMeta = {
  className?: string;
  children: any;
};
export const CardContentMeta = ({ className, children }: TCardContentMeta) => {
  return <div className={className}>{children}</div>;
};
