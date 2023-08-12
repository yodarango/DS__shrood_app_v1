import { COLOR_TERTIARY } from "../../assets/tokens";
import React, { ReactNode, useState } from "react";
import { Modal as MModal } from "@mui/material";
import { CloseButton, Heading } from "..";

import styles from "./modal.module.css";

interface IModal {
  trigger?: ReactNode | ReactNode[] | string | string[] | JSX.Element;
  children: (string | JSX.Element) | (string | JSX.Element)[];
  bannerBackground?: string;
  bannerColor?: string;
  bannerHeight?: number;
  onClose?: () => void;
  secondary?: boolean;
  primary?: boolean;
  modalId?: string;
  onScroll?: any;
  open?: boolean;
  title: string;
  href?: string;
  icon?: string;
}

export const Modal: React.FC<
  Omit<React.ComponentProps<typeof MModal>, "open" | "onClose"> & IModal
> = (props: any) => {
  const {
    bannerHeight = 100,
    bannerBackground,
    bannerColor,
    secondary,
    primary,
    onScroll,
    children,
    onClose,
    trigger,
    open,
    title,
    icon,
    href,
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(open || false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (onClose && isOpen) onClose();
  };

  let variantClass = "";

  if (primary || (!primary && !secondary && !bannerBackground && !bannerColor))
    variantClass = styles.primary;
  else if (secondary && !bannerBackground && !bannerColor)
    variantClass = styles.secondary;
  else if (bannerBackground || bannerColor) variantClass = styles.bannerImage;

  let backgroundImage = "";
  if (
    bannerBackground?.includes("png") ||
    bannerBackground?.includes("jpeg") ||
    bannerBackground?.includes("jpg") ||
    bannerBackground?.includes("webp")
  )
    backgroundImage = `linear-gradient(rgba(19, 14, 33, .5), rgba(19, 14, 33, .5)), url(${bannerBackground})`;
  else if (bannerBackground)
    backgroundImage = `linear-gradient(10deg, ${bannerBackground})`;

  return (
    <>
      <MModal open={isOpen} style={{ overflowY: "scroll" }}>
        <div className={`${styles.modal} ${variantClass}`}>
          {/* top banner s */}
          <div
            className={`d-flex align-items-start pt-4 justify-content-start ${styles.topBanner}`}
            style={{
              height: `${bannerHeight * 0.1}rem`,
              backgroundColor: bannerColor,
              backgroundImage,
            }}
          >
            <div
              className={`ms-6 me-2 ${styles.title}`}
              style={{ height: `${(bannerHeight - 60) * 0.1}rem` }}
            >
              {typeof title === "string" && (
                <Heading
                  variant='h2'
                  color={secondary ? COLOR_TERTIARY : undefined}
                >
                  {title}
                </Heading>
              )}
              {typeof title !== "string" && title}
              {icon && <div className={styles.icon}>{icon}</div>}
            </div>
          </div>

          {/* closing actions */}
          {!href && (
            <CloseButton
              onClick={handleToggle}
              className={styles.close}
              color={secondary ? COLOR_TERTIARY : undefined}
            />
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
            <div
              className={`m-auto ${styles.content}`}
              onScroll={onScroll}
              style={{
                minHeight: `calc(100% - ${(bannerHeight - 35) * 0.1}rem)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </MModal>

      {React.cloneElement(trigger as any, {
        ...trigger.props,
        onClick: handleToggle,
        primary: !primary && !secondary ? true : primary,
        secondary,
      })}
    </>
  );
};
