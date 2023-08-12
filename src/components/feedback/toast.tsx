import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { CloseButton, Heading, Icon, Paragraph } from "..";

import "./toast.css";
import { COLOR_PRIMARY, COLOR_TERTIARY } from "../../assets/tokens";

interface IToast {
  anchorOrigin?: {
    horizontal: "center" | "left" | "right";
    vertical: "bottom" | "top";
  };
  autoHideDuration?: number;
  secondary?: boolean;
  success?: boolean;
  primary?: boolean;
  warning?: boolean;
  danger?: boolean;
  title?: string;
  open?: boolean;
}
export const Toast: React.FC<
  Omit<React.ComponentProps<typeof Alert>, "severity" | "color"> & IToast
> = (props: any) => {
  const {
    autoHideDuration,
    anchorOrigin,
    className,
    secondary,
    children,
    onClose,
    primary,
    success,
    warning,
    danger,
    title,
    open,
    ...rest
  } = props;

  let variantClass = "";
  if (secondary) variantClass = "dr-secondary";
  else if (success) variantClass = "dr-success";
  else if (danger) variantClass = "dr-danger";
  else if (warning) variantClass = "dr-warning";
  else if (
    primary ||
    (!primary && !secondary && !success && !danger && !warning)
  )
    variantClass = "dr-primary";

  let iconName: undefined | string = undefined;

  if (success) iconName = "checkmarkCircle";
  if (danger) iconName = "closeCircled";
  if (warning) iconName = "warning";

  let horizontal, vertical;

  if (!anchorOrigin?.horizontal) horizontal = "center";
  else horizontal = anchorOrigin.horizontal;
  if (!anchorOrigin?.vertical) vertical = "top";
  else vertical = anchorOrigin.vertical;

  let titleBodyClass = "";
  if (danger || warning || success)
    titleBodyClass = "d-flex align-items-center justify-content-start";

  let closeColor: undefined | string = undefined;
  if (secondary) closeColor = COLOR_TERTIARY;
  else if (success || warning) closeColor = COLOR_PRIMARY;

  let iconColor: undefined | string = undefined;
  if (warning || success) iconColor = COLOR_PRIMARY;

  return (
    <Snackbar
      autoHideDuration={autoHideDuration || null}
      anchorOrigin={{ vertical, horizontal }}
      onClose={onClose}
      open={open}
    >
      <Alert
        className={`${className || ""} ${variantClass} dr-alert-custom`}
        sx={{ width: "100%", maxWidth: "40rem" }}
        onClose={onClose}
        action={<CloseButton onClick={onClose} color={closeColor} />}
        icon={false}
        {...rest}
      >
        {/* For variants "danger, "warning" and "success" render an icon */}
        <div className={titleBodyClass}>
          {iconName && typeof title === "string" && (
            <Icon name={iconName} className='me-2' color={iconColor} />
          )}
          {typeof title === "string" && (
            <Heading variant='h3' className='mb-1 mx-0 p-0 mt-0'>
              {title}
            </Heading>
          )}
        </div>

        {/* if the message is a string for variants "danger, "warning" and "success" then we want to render the icon inline with the txt */}
        {typeof children === "string" && (
          <div className={titleBodyClass}>
            {iconName && !title && (
              <Icon name={iconName} className='me-2' color={iconColor} />
            )}
            <Paragraph>{children}</Paragraph>
          </div>
        )}

        {/* if we are raw jsx passing  */}
        {typeof children !== "string" && children}
      </Alert>
    </Snackbar>
  );
};
