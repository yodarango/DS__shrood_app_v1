/*************************************************************************************************************
 * this component has its own open and close state. Do not pass it down from the parent or it will run into
 * conflict whit the local state. The component does have a onClose() callback to perform tasks upon
 * closing the menu. It also has a open prop to control the state from the parent on the first
 * render only. If you wish to close the menu after a selection has been made pass the
 * closeOnSelect prop to the MenuSlideUp component. ⭐️
 * ****************************************************
 */

import { CloseButton } from "../inputs/close_button";
import React, { useEffect, useState } from "react";
import { Heading } from "../data_display/heading";
import { Icon, IconButton, Loading, Portal } from "..";
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
  closeOnSelect?: boolean;
  onClose?: () => void;
  secondary?: boolean;
  className?: string;
  primary?: boolean;
  loading?: boolean;
  iconSize?: number;
  danger?: boolean;
  title?: string;
  open?: boolean;
  children: any;
};

export const MenuSlideUp = ({
  closeOnSelect,
  className = "",
  icon = "menu",
  iconSize = 40,
  customColors,
  secondary,
  iconProps,
  children,
  loading,
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
    document.body.style.overflowY = "unset";
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
      onClick: (val: any) => {
        child.props.onClick(val);
        document.body.style.overflowY = "unset";
        if (closeOnSelect) setIsOpen(false);
      },
      secondary,
      primary,
      danger,
    });
  });

  const setIconProps = {
    ...iconProps,
    sx: { width: iconSize, height: iconSize },
  };

  return (
    <>
      <Portal>
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
            {...setIconProps}
            {...iconVariants}
            loading={loading}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon name={icon} />
          </IconButton>
        </div>
      )}

      {!loading && typeof icon !== "string" && (
        <div
          className={`${styles.drMenuSlideupContainerfg34}`}
          onClick={() => {
            setIsOpen(!isOpen);
            document.body.style.overflowY = !isOpen ? "hidden" : "unset";
          }}
        >
          {icon}
        </div>
      )}

      {loading && typeof icon !== "string" && (
        <Loading primary={primary} secondary={secondary} danger={danger} />
      )}
    </>
  );
};

type TMenuPrimaryOption = {
  onClick: (value: any, closeOnSelect: boolean) => void;
  value: string | number | boolean;
  iconProps?: typeof IconButton;
  closeOnSelect?: boolean;
  secondary?: boolean;
  className?: string;
  primary?: boolean;
  danger?: boolean;
  loading?: boolean;
  children: any;
  icon?: any;
};

export const MenuSlideUpItem = ({
  closeOnSelect,
  iconProps,
  className,
  children,
  secondary,
  onClick,
  primary,
  loading,
  value,
  danger,
  icon,
}: TMenuPrimaryOption) => {
  const shadowClass = secondary ? "shadow-box-tertiary" : "shadow-light";

  return (
    <div className={`dr-menuslideup-option-container mb-3 ${className}`}>
      <div
        className='d-flex align-items-center justify-content-start'
        onClick={() => onClick(value, !!closeOnSelect)}
      >
        <div
          className={`ms-1 me-2 shrink-0 ${styles.drMenuslideupOptionContainerIcon} ${shadowClass}`}
        >
          {typeof icon === "string" && (
            <IconButton
              secondary={secondary}
              primary={primary}
              danger={danger}
              loading={loading}
              {...iconProps}
            >
              <Icon name={icon} />
            </IconButton>
          )}
          {icon &&
            typeof icon !== "string" &&
            React.cloneElement(icon, {
              secondary,
              primary,
              danger,
            })}
        </div>

        <div>
          <div
            className={`${styles.drMenuslideupOptionLabel} py-2 px-0 d-inline-block`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
