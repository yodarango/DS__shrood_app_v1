import React, { ReactNode, useState } from "react";
import { CloseButton, Heading } from "..";
import { Modal } from "@mui/material";

import styles from "./simple_modal.module.css";

interface ISimpleModal {
  trigger?: ReactNode | ReactNode[] | string | string[] | JSX.Element;
  children: (string | JSX.Element) | (string | JSX.Element)[];
  onClose?: () => void;
  modalId?: string;
  onScroll?: any;
  open?: boolean;
  title: string;
  href?: string;
  icon?: string;
}

export const SimpleModal: React.FC<
  Omit<React.ComponentProps<typeof Modal>, "open" | "onClose"> & ISimpleModal
> = (props: any) => {
  const { onScroll, children, onClose, trigger, open, title, icon, href } =
    props;

  const [isOpen, setIsOpen] = useState<boolean>(open || false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (onClose && isOpen) onClose();
  };

  return (
    <>
      <Modal open={isOpen}>
        <div className={styles.simpleModal}>
          {/* top banner s */}
          <div
            className={`d-flex align-items-center justify-content-start ${styles.topBanner}`}
          >
            <div className={`ms-6 me-2 ${styles.title}`}>
              {typeof title === "string" && (
                <Heading variant='h1'>{title}</Heading>
              )}
              {typeof title !== "string" && title}
              {icon && <div className={styles.icon}>{icon}</div>}
            </div>
          </div>

          {/* closing actions */}
          {!href && (
            <CloseButton onClick={handleToggle} className={styles.close} />
          )}
          {typeof href === "string" && (
            <a href={href} className={styles.close}>
              <CloseButton />
            </a>
          )}
          {href && typeof href !== "string" && (
            <div className={styles.close}>{href}</div>
          )}
          <div className={styles.contentHolder}>
            <div className={`m-auto ${styles.content}`} onScroll={onScroll}>
              {children}
            </div>
          </div>
        </div>
      </Modal>

      {React.cloneElement(trigger as any, {
        ...trigger.props,
        onClick: handleToggle,
      })}
    </>
  );
};
