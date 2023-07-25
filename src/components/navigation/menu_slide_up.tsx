import { Icon, IconButton, Paragraph, Portal } from "..";
import { CloseButton } from "../inputs/close_button";
import { Heading } from "../data_display/heading";
import React, { useEffect, useState } from "react";
import {
  COLOR_QUATERNARY,
  COLOR_SEPTENARY,
  COLOR_SECONDARY,
  COLOR_QUINARY,
  COLOR_SENARY,
} from "../../assets/tokens";

import "./menu_slide_up.css";

type TPrimaryMenuBkgProps = {
  icon?: string | JSX.Element | React.ReactNode;
  onSelect?: (value: string | number) => void;
  customColors?: [string, string?];
  iconProps?: typeof IconButton;
  onClose?: () => void;
  secondary?: boolean;
  className?: string;
  primary?: boolean;
  danger?: boolean;
  error?: boolean;
  title?: string;
  open?: boolean;
  children: any;
};

export const MenuSlideUp = ({
  className = "",
  icon = "menu",
  customColors,
  secondary,
  iconProps,
  children,
  onClose,
  primary,
  danger,
  title,
  open,
}: TPrimaryMenuBkgProps) => {
  const [isOpen, setIsOpen] = useState(open);
  // determine the background color
  let menuVariantClassNames: string = "";
  let bkgColor: string = `linear-gradient(-10deg, ${COLOR_QUATERNARY}, ${COLOR_QUINARY})`;
  const iconVariants = { primary, secondary, danger };

  if (secondary) {
    bkgColor = `${COLOR_SECONDARY}`;
    menuVariantClassNames = "dr-menu-slideup-container_secondary";
  } else if (danger)
    bkgColor = `linear-gradient(-10deg, ${COLOR_SEPTENARY},  ${COLOR_SENARY})`;
  else if (customColors && customColors.length > 1)
    bkgColor = `linear-gradient(-10deg, ${customColors[0]},  ${customColors[1]})`;
  else if (customColors && customColors.length === 1)
    bkgColor = `${customColors[0]}`;

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  useEffect(() => {
    if (typeof open !== "boolean") setIsOpen(false);
    else setIsOpen(open);
  }, [open]);

  // pass the variant to the children so you dont have to specify it in each
  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      secondary,
      primary,
      danger,
    });
  });

  return (
    <>
      <Portal portalId='portal'>
        {isOpen && (
          <div
            className={`dr-menu-slideup-container ${className} ${menuVariantClassNames}`}
            style={{ background: bkgColor }}
          >
            <div className='dr-menu-slideup-container_close'>
              <CloseButton onClick={handleClose} size='2.5rem' />
            </div>
            {typeof title === "string" && (
              <div className='mb-2'>
                <Heading variant='h4'>{title}</Heading>
              </div>
            )}
            {typeof title !== "string" && title}
            <div className='dr-menut-slidup-container_content'>
              {childrenWithProps}
            </div>
          </div>
        )}
      </Portal>

      {typeof icon === "string" && (
        <IconButton
          {...iconProps}
          {...iconVariants}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name={icon} />
        </IconButton>
      )}
      {typeof icon !== "string" && (
        <div onClick={() => setIsOpen(!isOpen)}>{icon}</div>
      )}
    </>
  );
};

type TMenuPrimaryOption = {
  onClick: (value: string | number | boolean) => void;
  value: string | number | boolean;
  iconProps?: typeof IconButton;
  secondary?: boolean;
  className?: string;
  primary?: boolean;
  danger?: boolean;
  children: any;
  icon?: any;
};

export const MenuSlideUpItem = ({
  iconProps,
  className,
  children,
  secondary,
  onClick,
  primary,
  value,
  danger,
  icon,
}: TMenuPrimaryOption) => {
  const shadowClass = secondary ? "shadow-box-tertiary" : "shadow-light";

  return (
    <div
      className={`dr-menuslideup-option-container mb-2 ${className}`}
      onClick={() => onClick(value)}
    >
      <div className='d-flex align-items-center justify-content-center'>
        <div
          className={`ms-1 me-2 shrink-0 dr-menuslideup-option-container_icon ${shadowClass}`}
        >
          {typeof icon === "string" && (
            <IconButton
              secondary={secondary}
              primary={primary}
              danger={danger}
              {...iconProps}
            >
              <Icon name={icon} />
            </IconButton>
          )}
          {icon &&
            typeof icon !== "string" &&
            React.cloneElement(icon, { secondary, primary, danger })}
        </div>
        <div className='w-100 dr-menuslideup-option_label py-2 px-0'>
          {children}
        </div>
      </div>
    </div>
  );
};
