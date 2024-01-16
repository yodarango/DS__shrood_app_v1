import { Box, Modal } from "@mui/material";
import { Button, Heading, Paragraph } from "..";
import "./modal_dialog.css";
import React from "react";

interface IModalDialog {
  onBackdropClose?: (e: object, reason: string) => void;
  title?: string | React.ReactNode | JSX.Element;
  label?: string | React.ReactNode | JSX.Element;
  onAcknowledgeAction?: () => void;
  onNegativeAction?: () => void;
  onPositiveAction?: () => void;
  negativeActionLabel?: string;
  positiveActionLabel?: string;
  acknowledgeAction?: string;
  open?: boolean;
}

export const ModalDialog: React.FC<
  React.ComponentProps<typeof Box> & IModalDialog
> = (props: any) => {
  let {
    acknowledgeActionLabel,
    negativeActionLabel,
    positiveActionLabel,
    onAcknowledgeAction,
    onNegativeAction,
    onPositiveAction,
    onBackdropClose,
    className,
    children,
    label,
    title,
    open,
    sx,
    ...rest
  } = props;

  return (
    <Modal open={open} onClose={onBackdropClose}>
      <Box className={`${className || ""} dr-modal-dialog`} {...rest}>
        <div>
          {typeof children === "object" &&
            children.find(
              (child: JSX.Element) => child.type.name === "ModalDialogHeader"
            )}
          {typeof children === "object" &&
            children.find(
              (child: JSX.Element) => child.type.name === "ModalDialogContent"
            )}
        </div>
        <div
          className={`d-flex align-items-center justify-content-center gap-3`}
        >
          {typeof children === "object" &&
            children.find(
              (child: JSX.Element) => child.type.name === "ModalDialogActions"
            )}
        </div>
      </Box>
    </Modal>
  );
};

export const ModalDialogHeader: React.FC<
  Partial<React.ComponentProps<typeof Heading>>
> = (props: any) => {
  const { children, variant, ...rest } = props;

  return (
    <>
      {typeof children === "string" && (
        <Heading
          className='mb-3 text-center'
          variant={variant || "h2"}
          {...rest}
        >
          {children}
        </Heading>
      )}
      {typeof children !== "string" && children}
    </>
  );
};

export const ModalDialogContent: React.FC<
  Partial<React.ComponentProps<typeof Paragraph>>
> = (props: any) => {
  const { children, variant, ...rest } = props;

  return (
    <>
      {typeof children === "string" && (
        <Paragraph className='mb-3 text-center' {...rest}>
          {children}
        </Paragraph>
      )}
      {typeof children !== "string" && children}
    </>
  );
};

type TModalDialogActions = {
  onAcknowledge?: () => void;
  onDecline?: () => void;
  onAccept?: () => void;
};

export const ModalDialogActions: React.FC<
  Partial<React.ComponentProps<typeof Button>> & TModalDialogActions
> = (props: any) => {
  let { onAcknowledge, onDecline, onAccept, children, ...rest } = props;
  children = React.Children.toArray(children);

  const childrenToRender: any[] = [];

  if (children.length === 1) {
    if (typeof children[0] === "string") {
      childrenToRender.push(
        <Button onClick={onAcknowledge} {...rest} secondary>
          {children[1]}
        </Button>
      );
    } else {
      childrenToRender.push(
        React.cloneElement(children[0], {
          onClick: onAcknowledge,
        })
      );
    }
  }

  if (children.length === 2) {
    if (typeof children[0] === "string") {
      childrenToRender.push(
        <Button onClick={onDecline} {...rest} danger>
          {children[0]}
        </Button>
      );
    } else {
      childrenToRender.push(
        React.cloneElement(children[0], {
          onClick: onDecline,
        })
      );
    }
    if (typeof children[1] === "string") {
      childrenToRender.push(
        <Button onClick={onDecline} {...rest} danger>
          {children[1]}
        </Button>
      );
    } else {
      childrenToRender.push(
        React.cloneElement(children[1], {
          onClick: onDecline,
        })
      );
    }
  }

  if (children.length === 3) {
    if (typeof children[0] === "string") {
      childrenToRender.push(
        <Button onClick={onDecline} {...rest} danger>
          {children[0]}
        </Button>
      );
    } else {
      childrenToRender.push(
        React.cloneElement(children[0], {
          onClick: onDecline,
        })
      );
    }
    if (typeof children[1] === "string") {
      childrenToRender.push(
        <Button onClick={onDecline} {...rest} secondary>
          {children[1]}
        </Button>
      );
    } else {
      childrenToRender.push(
        React.cloneElement(children[1], {
          onClick: onAcknowledge,
        })
      );
    }
    if (typeof children[2] === "string") {
      childrenToRender.push(
        <Button onClick={onDecline} {...rest} primary>
          {children[2]}
        </Button>
      );
    } else {
      childrenToRender.push(
        React.cloneElement(children[2], {
          onClick: onDecline,
        })
      );
    }
  }

  return <>{childrenToRender}</>;
};
