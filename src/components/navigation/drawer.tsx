import { Box, Drawer as MDrawer, ListItem as MListItem } from "@mui/material";
import React, { useState } from "react";

import "./drawer.css";

interface IDrawer {
  trigger: React.ReactNode | readonly React.ReactNode[];
  children: React.ReactNode | readonly React.ReactNode[];
  anchor?: "right" | "left"; // overrides anchor
  width?: string | number;
  secondary?: boolean;
  primary?: boolean;
  danger?: boolean;
}

export const Drawer: React.FC<
  Omit<React.ComponentProps<typeof MDrawer>, "anchor"> & IDrawer
> = (props: any) => {
  let {
    anchor = "left",
    className = "",
    secondary,
    children,
    primary,
    trigger,
    width = "30rem",
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  let variantClass = "";
  if (primary) variantClass = "primary";
  if (secondary) variantClass = "secondary";

  if (!primary && !secondary) variantClass = "primary";

  return (
    <div>
      <MDrawer
        className={`dr-drawer-${variantClass}`}
        onClose={() => setIsOpen(false)}
        anchor={anchor}
        open={isOpen}
      >
        <Box
          className={`${className || ""}`}
          onClick={() => setIsOpen(false)}
          sx={{ width: width }}
          role='presentation'
          {...rest}
        >
          {React.Children.map(children, (child: React.ReactElement) => {
            return React.cloneElement(child, {
              secondary,
              primary,
              ...child.props,
            });
          })}
        </Box>
      </MDrawer>

      {React.cloneElement(trigger as React.ReactElement, {
        onClick: () => setIsOpen(!isOpen),
      })}
    </div>
  );
};

interface IDrawerItem {
  children: React.ReactNode | readonly React.ReactNode[] | string;
  secondary?: boolean;
  primary?: boolean;
  danger?: boolean;
}

export const ListItem: React.FC<
  Omit<React.ComponentProps<typeof MListItem>, "color"> & IDrawerItem
> = (props: any) => {
  const { primary, secondary, danger, children, ...rest } = props;

  let variantClass = "";
  if (secondary) variantClass = "secondary";
  if (primary) variantClass = "primary";
  if (danger) variantClass = "danger";

  return (
    <MListItem
      className={`p-3 mb-2 drawer-list-item drawer-list-item-${variantClass} ${
        props.className || ""
      } `}
      {...rest}
    >
      {children}
    </MListItem>
  );
};
