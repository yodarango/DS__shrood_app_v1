import { CloseButton } from "../inputs/close_button";
import React, { useEffect, useState } from "react";
import { Heading } from "../data_display/heading";
import { Icon, IconButton, Portal } from "..";
import {
  COLOR_QUATERNARY,
  COLOR_SEPTENARY,
  COLOR_SECONDARY,
  COLOR_QUINARY,
  COLOR_SENARY,
} from "../../assets/tokens";

import styles from "./menu_slide_up.module.css";

type TPrimaryMenuBkgProps = {
  icon?: string | JSX.Element | React.ReactNode;
  onSelect?: (value: string | number) => void;
  customColors?: [string, string?];
  iconProps?: typeof IconButton;
  onClose?: () => void;
  secondary?: boolean;
  className?: string;
  portalId?: string;
  primary?: boolean;
  danger?: boolean;
  title?: string;
  open?: boolean;
  children: any;
};

export const MenuSlideUp = ({
  portalId = "portal",
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
    menuVariantClassNames = styles.drMenuSlideupContainerSecondary;
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
      <Portal portalId={portalId}>
        {isOpen && (
          <div
            className={`${styles.drMenuSlideupContainer} ${className} ${menuVariantClassNames}`}
            style={{ background: bkgColor }}
          >
            <div className={`${styles.drMenuSlideupContainerClose}`}>
              <CloseButton onClick={handleClose} size={25} />
            </div>
            {typeof title === "string" && (
              <div className='mb-2'>
                <Heading variant='h4'>{title}</Heading>
              </div>
            )}
            {typeof title !== "string" && title}
            <div className={`${styles.drMenutSlidupContainerContent}`}>
              {childrenWithProps}
            </div>
          </div>
        )}
      </Portal>

      {typeof icon === "string" && (
        <div className={`${styles.drMenuSlideupContainerfg34}`}>
          <IconButton
            {...iconProps}
            {...iconVariants}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon name={icon} />
          </IconButton>
        </div>
      )}
      {typeof icon !== "string" && (
        <div
          className={`${styles.drMenuSlideupContainerfg34}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {icon}
        </div>
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
    <div className={`dr-menuslideup-option-container mb-2 ${className}`}>
      <div className='d-flex align-items-center justify-content-start'>
        <div
          className={`ms-1 me-2 shrink-0 ${styles.drMenuslideupOptionContainerIcon} ${shadowClass}`}
          onClick={() => onClick(value)}
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
        <div>
          <div
            className={`${styles.drMenuslideupOptionLabel} py-2 px-0 d-inline-block`}
            onClick={() => onClick(value)}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
